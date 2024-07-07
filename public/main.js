
document.getElementById('start-test').addEventListener('click', async () => {
    const response = await fetch('/api/speedtest');
    const data = await response.json();
    
    document.getElementById('ping').textContent = data.ping.latency;
    document.getElementById('download').textContent = (data.download.bandwidth / 125000).toFixed(2);
    document.getElementById('upload').textContent = (data.upload.bandwidth / 125000).toFixed(2);
});
