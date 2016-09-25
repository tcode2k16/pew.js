var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
//style
canvas.style.width = screen.width+'px';
canvas.style.height = screen.height+'px';
canvas.style.margin = 'auto';
canvas.style.zIndex = '10';
canvas.style.position= 'absolute';
document.body.appendChild(canvas);

//drawing
var img = document.createElement('img');
img.onload = function () {
  ctx.drawImage(img,screen.width/2,screen.height/2);
}

img.src = '/img/pew_js_texture.svg';
