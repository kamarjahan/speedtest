document.getElementById('start-test').addEventListener('click', async () => {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    try {
        const response = await fetch('/api/speedtest');
        const data = await response.json();
        
        document.getElementById('ping').textContent = data.ping.latency;
        document.getElementById('download').textContent = (data.download.bandwidth / 125000).toFixed(2);
        document.getElementById('upload').textContent = (data.upload.bandwidth / 125000).toFixed(2);
    } catch (error) {
        console.error('Error fetching speed test data:', error);
    }

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'flex';
});
