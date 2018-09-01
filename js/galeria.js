console.log("carga el archivo");

var barra_img =document.querySelector('.menu');
var img_display =document.querySelector('#imagen');

console.log(barra_img);
console.log(img_display);
for(var i=1;i<=4;i++){
    var nuevaImg=document.createElement('img');
    nuevaImg.setAttribute('src','img/img'+i+'.jpg');
    barra_img.appendChild(nuevaImg);
    nuevaImg.onclick = function(e){
        var imgsrc =e.target.getAttribute('src');
        cambiarImg(imgsrc);
    }
}

function cambiarImg(imgsrc){
    img_display.setAttribute('src',imgsrc);
}