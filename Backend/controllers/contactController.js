const pool = require('../config/db');

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

async function submitContact(req, res) {
  try {
    const { name, email, subject, message } = req.body;

    const errors = {};
    if (!name || !name.trim()) errors.name = 'Please tell us your name.';
    if (!email || !EMAIL_REGEX.test(email)) errors.email = 'Please enter a valid email address.';
    if (!message || !message.trim()) errors.message = "Don't forget your message.";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const [result] = await pool.query(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name.trim(), email.trim(), subject ? subject.trim() : null, message.trim()]
    );

    return res.status(201).json({
      success: true,
      message: 'Thank you — your note has reached the kitchen. We will write back shortly.',
      id: result.insertId
    });
  } catch (err) {
    console.error('Error saving contact submission:', err);
    return res.status(500).json({ success: false, message: 'Something went wrong on our end. Please try again later.' });
  }
}

async function getAllContacts(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return res.json({ success: true, data: rows });
  } catch (err) {
    console.error('Error fetching contacts:', err);
    return res.status(500).json({ success: false, message: 'Could not fetch submissions.' });
  }
}

module.exports = { submitContact, getAllContacts };