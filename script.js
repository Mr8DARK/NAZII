function changeText() {
    document.getElementById("message").innerText = "تم تغيير النص!";
}

function generateRandomLink() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomStr = '';
    for (let i = 0; i < 10; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("randomLink").innerText = `https://mywebsite.com/${randomStr}`;
}

document.addEventListener("DOMContentLoaded", generateRandomLink);
