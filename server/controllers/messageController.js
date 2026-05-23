const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, text } = req.body;

    if (!name || !email || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new Message({
      name,
      email,
      message: text,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("Message Error:", error);
    res
      .status(500)
      .json({
        message: "Internal server error saving message",
        error: error.message,
      });
  }
};
