// Clipboard API: Копирование текста в буфер обмена
document.getElementById("copyButton").onclick = () => {
    const text = document.getElementById("textToCopy").value;
    navigator.clipboard.writeText(text).then(() => {
        alert("Текст скопирован!");
    });
};

// Geolocation API: Определение местоположения пользователя
document.getElementById("geoButton").onclick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        document.getElementById("geoOutput").innerText =
            `Широта: ${position.coords.latitude}, Долгота: ${position.coords.longitude}`;
    });
};

// Notifications API: Отображение уведомления
document.getElementById("notifyButton").onclick = () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Это уведомление с вашего сайта!");
        }
    });
};
