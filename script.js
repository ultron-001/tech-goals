document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTCElement = document.getElementById('currentTimeUTC');
    const currentDayElement = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        currentTimeUTCElement.textContent = now.toUTCString().split(' ')[4];
        currentDayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000);
});
