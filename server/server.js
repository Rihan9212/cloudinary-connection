const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");

dotenv.config();

const cloudinary = require("./config/cloudinary");

const app = express();

// Store uploaded files temporarily in memory
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Cloudinary server is running!");
});

const PORT = process.env.PORT || 5000;

app.post("/upload", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload an image"
            });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(
            `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
            {
                folder: "my-uploads"
            }
        );

        res.status(200).json({
            message: "Image uploaded successfully!",
            imageUrl: result.secure_url,
            publicId: result.public_id
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Image upload failed",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});