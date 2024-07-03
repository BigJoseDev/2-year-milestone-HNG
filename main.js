document.addEventListener("DOMContentLoaded", () => {
    const utcTimeElement = document.getElementById("utcTime");
    const dayOfWeekElement = document.getElementById("dayOfWeek");

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25);
        const dayOfWeek = now.toUTCString().slice(0, 3);
        
        utcTimeElement.textContent = utcTime;
        dayOfWeekElement.textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
