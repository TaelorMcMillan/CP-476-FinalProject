var canvas, ctx, flag = false,
    pX = 0,
    cX = 0,
    pY = 0,
    cY = 0,
    dflag = false;

var x = "black";
var y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function(e) {
        find('move', e)
    }, false);
    canvas.addEventListener("mousedown", function(e) {
        find('down', e)
    }, false);
    canvas.addEventListener("mouseup", function(e) {
        find('up', e)
    }, false);
    canvas.addEventListener("mouseout", function(e) {
        find('out', e)
    }, false);
}

function background_color_change() {
    document.getElementById('can').style.backgroundColor = document.getElementById('color_background').value;
}

function draw() {
    x = document.getElementById('color').value;
    y = document.getElementById('line_width').value;
    ctx.beginPath();
    ctx.moveTo(pX, pY);
    ctx.lineTo(cX, cY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function find(res, e) {
    if (res == 'down') {
        pX = cX;
        pY = cY;
        cX = e.clientX - canvas.offsetLeft;
        cY = e.clientY - canvas.offsetTop;

        flag = true;
        dflag = true;
        if (dflag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(cX, cY, 2, 2);
            ctx.closePath();
            dflag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            pX = cX;
            pY = cY;
            cX = e.clientX - canvas.offsetLeft;
            cY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

function clear_message() {
    ctx.clearRect(0, 0, w, h);
    document.getElementById('can').style.backgroundColor = 'white';
    document.getElementById('color_background').value = "#ffffff";
    document.getElementById('color').value = 'black';
    document.getElementById('line_width').value = '5';
}

function canvas_img() {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}