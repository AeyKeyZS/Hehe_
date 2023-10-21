const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the specified port or default to 3000

// Configure Multer to store uploaded files in the "uploads" directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Serve a basic HTML form for uploading files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const uploadedFile = req.file;
  res.send(`File "${uploadedFile.originalname}" uploaded successfully.`);
});

app.get('/list-files', (req, res) => {
  const directoryPath = path.join(__dirname, 'uploads'); // Path to your uploads folder

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      // Handle any errors, e.g., the directory doesn't exist
      return res.status(500).send('Error listing files');
    }

    const fileNames = files.map((file) => ({ name: file }));
    res.json(fileNames);
  });
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const file = `${__dirname}/uploads/${filename}`;

  res.download(file, (err) => {
    if (err) {
      // Handle errors, such as the file not being found
      res.status(404).send('File not found');
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
