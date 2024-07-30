// Countdown timer script
window.onload = function () {
    var i = 60; // seconds
    var download_countdown = setInterval(function () {
        i--;
        document.getElementById('download_countdown').innerHTML = '➜ ' + i;
        if (i == 0) {
            document.getElementById('download_ready').style.display = 'block';
            document.getElementById('download_countdown').style.display = 'none';
            document.getElementById('download_wait').style.display = 'none';
            clearInterval(download_countdown);
        }
    }, 1000);
}
