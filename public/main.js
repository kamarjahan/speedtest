document.getElementById('start-test').addEventListener('click', async () => {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    try {
        const response = await fetch('/api/speedtest');
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }

        const ping = data.ping ? data.ping.latency : 'N/A';
        const download = data.download ? (data.download.bandwidth / 125000).toFixed(2) : 'N/A';
        const upload = data.upload ? (data.upload.bandwidth / 125000).toFixed(2) : 'N/A';

        
        document.getElementById('ping').textContent = ping;
        document.getElementById('download').textContent = download;
        document.getElementById('upload').textContent = upload;
    } catch (error) {
        console.error('Error fetching speed test data:', error);
        alert('Failed to fetch speed test data. Please try again later.');
    }

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'flex';
});










