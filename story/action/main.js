
var wWidth = document.documentElement.clientWidth;
var wHeight = document.documentElement.clientHeight;

var oLeft = document.getElementById("leftContainer");

var oBtnLeft = document.getElementById("leftButton");
var oBtnRight = document.getElementById("rightButton");

var aMes = document.getElementsByClassName("mes");
var aHzt = document.getElementsByClassName("hzt");

var index = 0;
var MAX = 9;

var menuBtn = document.getElementById("menuButton");
var oMask = document.getElementById("mask");
var oMenu = document.getElementById("menuContainer");
var menuCloseBtn = document.getElementById("closeBtn");

var backTopBtn = document.getElementById("backTop");

window.onload = function(){
    oLeft.style.height = wHeight + "px";

    for(var i = 0 ; i < MAX ; i ++){
        aHzt[i].style.display = "none";
    }

    aMes[index].style.display = "block";
    aHzt[index].style.display = "block";
    setAnimation();
    
    oBtnLeft.addEventListener("click",goBefore);
    oBtnRight.addEventListener("click",goNext);
    menuBtn.addEventListener("click",menuAndMask);
    menuCloseBtn.addEventListener("click",menuClose);
    backTopBtn.addEventListener("click",backTop);
    window.addEventListener("scroll",onScroll);
};

function setAnimation(){
    aMes[index].getElementsByClassName("title")[0].style.animation = "mesIn 0.3s ease-in-out 0s";
    aMes[index].getElementsByClassName("title")[0].style.animationFillMode = "both";
    aMes[index].getElementsByClassName("info")[0].style.animation = "mesIn 0.3s ease-in-out 0.15s";
    aMes[index].getElementsByClassName("info")[0].style.animationFillMode = "both";
    aHzt[index].style.animation = "hztIn 0.45s ease-in-out 0s";
    aHzt[index].style.animationFillMode = "both";
}

function goNext(){
    if(index < MAX - 1){
        aMes[index].style.display = "none";
        aHzt[index].style.display = "none";
        index += 1;
        aMes[index].style.display = "block";
        aHzt[index].style.display = "block";
        document.body.scrollTop = 0;
        setAnimation();
    }
}

function goBefore(){
    if(index > 0){
        aMes[index].style.display = "none";
        aHzt[index].style.display = "none";
        index -= 1;
        aMes[index].style.display = "block";
        aHzt[index].style.display = "block";
        document.body.scrollTop = 0;
        setAnimation();
    }
}

function menuAndMask(){
    oMask.style.display = "block";
    oMenu.style.display = "block";
    oMenu.style.animation = "menuIn 0.25s ease-in-out 0s";
    oMenu.style.animationFillMode = "both";
}

function menuClose(){
    oMask.style.display = "none";
    oMenu.style.display = "none";
}

function backTop(){
    var oTimer = setInterval(function(){
        if(document.body.scrollTop <= 0){
            document.body.scrollTop = 0;
            clearInterval(oTimer);
        }
        document.body.scrollTop -= 50;
    },10);
}

function onScroll(){
    if(document.body.scrollTop < 100){
        backTopBtn.style.display = "none";
    }
    if(document.body.scrollTop >= 100){
        backTopBtn.style.display = "block";
    }
}