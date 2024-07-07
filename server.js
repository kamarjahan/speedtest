const express = require('express');
const speedTest = require('speedtest-net');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/speedtest', async (req, res) => {
    try {
        const test = speedTest({ acceptLicense: true });

        test.on('data', data => {
            res.json(data);
        });

        test.on('error', err => {
            res.status(500).json({ error: err.message });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
