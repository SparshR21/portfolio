// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// allow your Vite dev server; during dev you can keep origin: true
app.use(cors({ origin: true }));
app.use(express.json());

// SMTP transporter (Gmail example). Use an APP PASSWORD, not your normal password.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // 465 = secure
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // app password
  },
});

// optional: verify SMTP on boot to catch bad creds early
transporter.verify().then(() => {
  console.log("✅ SMTP ready");
}).catch(err => {
  console.error("❌ SMTP error:", err.message);
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER, // where you receive messages
      replyTo: email, // so you can reply directly
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, message: err.response || err.message || "Mail failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API running at http://localhost:${PORT}`));
