
var wWidth = document.documentElement.clientWidth;
var wHeight = document.documentElement.clientHeight;

var oHead = document.getElementsByTagName("header")[0];

var oMenuBtn = document.getElementById("btnContainer");
var oBgMesBtn = document.getElementById("bgMesContainer").getElementsByTagName("span")[0];
var oBgMes = document.getElementById("bgMesContainer");
var oMenu = document.getElementById("menuContainer");
var oCloseBtn = document.getElementById("closeBtn");

var oIcons = document.getElementById("iconContainer").getElementsByTagName("img");

window.onload = function(){
    oHead.style.height = wHeight + "px";
    oMenuBtn.addEventListener("click",toMenuBlock);
    oBgMesBtn.addEventListener("click",menuTransformIn);
    oCloseBtn.addEventListener("click",menuTransformOut);
    window.addEventListener("scroll",onscroll);
};

function toMenuBlock(){
    var scrollTop = document.getElementById("bgContainer").offsetTop;
    var oTimer = setInterval(function(){
        document.body.scrollTop += 10;
        if(document.body.scrollTop >= scrollTop){
            clearInterval(oTimer);
            menuTransformIn();
        }
    },5);
}

function menuTransformIn(){
    oBgMes.style.animation = "bgMesOut 0.3s linear 0s"
    oMenu.style.animation = "menuIn 0.3s linear 0.3s";
    oBgMes.style.animationFillMode = "both";
    oMenu.style.animationFillMode = "both";
}

function menuTransformOut(){
    oBgMes.style.animation = "bgMesIn 0.3s linear 0.3s"
    oMenu.style.animation = "menuOut 0.3s linear 0s";
    oBgMes.style.animationFillMode = "both";
    oMenu.style.animationFillMode = "both";
}

function onscroll(){
    if(document.body.scrollTop >= 250){
        var i = 0;
        var oTimer = setInterval(function(){
            oIcons[i].style.animation = "imgIn 0.5s ease-in-out 0s";
            oIcons[i].style.animationFillMode = "both";
            if(i == oIcons.length - 1)
                clearInterval(oTimer);
            i ++;
        },50);
    }
}