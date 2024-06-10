for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var audio=new Audio(src="/Drum Kit Starting Files/sounds/tom-1.mp3");
        audio.play();
    });
}

