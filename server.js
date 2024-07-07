const express = require('express');
const speedTest = require('speedtest-net');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/speedtest', async (req, res) => {
    try {
        const result = await speedTest({ acceptLicense: true });
        console.log('Speed test data:', result); // Log data for debugging
        res.json(result);
    } catch (error) {
        console.error('Speed test error:', error); // Log error for debugging
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
