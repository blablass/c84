canvas=document.getElementById("mavas");
ctx=canvas.getContext("2d");
roverx=100;
rovery=100;
roverwidth=100;
roverheight=80;
bg="mars.jpg";
rover="rover.png";
function add(){
    bgimg=new Image();
    bgimg.onload=uploadbg;
    bgimg.src=bg;
    roverimg=new Image();
    roverimg.onload=uploadrover;
    roverimg.src=rover;
}
function uploadbg(){
    ctx.drawImage(bgimg,0,0,1000,800);

}
function uploadrover(){
ctx.drawImage(roverimg,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress=='37'){
        roverleft();
        console.log("leftarrowispressed");
    }
    if (keypress=='38'){
        roverup();
        console.log("uparrowispressed");
    }
    if (keypress=='39'){
        roverright();
        console.log("rightarrowispressed");
    }
    if (keypress=='40'){
        roverdown();
        console.log("downarrowispressed");
    }
}
