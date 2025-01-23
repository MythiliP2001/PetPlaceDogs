const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Define the uploads directory path
const uploadDir = path.join(__dirname, 'uploads');

// Ensure that the 'uploads' directory exists, create it if not
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure that files are stored in the 'uploads' folder
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Ensure unique filenames
  }
});

// File filter to allow only specific image types (JPG, JPEG, PNG)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG, and JPG are allowed'), false);
  }
};

// Initialize multer with storage and file filter
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
