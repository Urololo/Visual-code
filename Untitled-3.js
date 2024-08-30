document.addEventListener("DOMContentLoaded", function() {
    const wifiToggle = document.getElementById("wifi-toggle");
    const notification = document.getElementById("notification");

    wifiToggle.addEventListener("change", function() {
        if (wifiToggle.checked) {
            showNotification("WiFi On");
        } else {
            showNotification("WiFi Off");
        }
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 2000); // La notificación desaparece después de 2 segundos
    }
});
