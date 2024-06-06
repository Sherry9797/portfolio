document.addEventListener('mousemove', function (e) {
    var cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mousedown', function () {
    var cursor = document.getElementById('cursor');
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', function () {
    var cursor = document.getElementById('cursor');
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});
