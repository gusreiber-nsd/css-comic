const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle undefined routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1); // mandatory (as per the Node.js docs)
});
