window.onload=function(){
    var b1=document.getElementById('button1');
    var b2=document.getElementById('button2');
    var bird=document.getElementById('bird');
    var c1=document.getElementById('container1');
    var c2=document.getElementById('container2');
    var pi=document.querySelector('#container2');
    var kai=document.querySelector('#container1');
    var sai=document.querySelector('#bird');
    var gh=document.getElementById('score');
    var ghai=document.querySelector('#score');
    var hai=document.querySelector("#console");
    var shai=document.getElementById('console');
    var x=300;
    var a=500;
    var sir=0;
    var lir=0;
    var t=400;
    var d=100;
    var score=0;
    var u=300;
    var yy=Math.random()*500+100;
    c2.style.bottom=yy+'px';  
    var xx=0;
    var bool=true;
    var t=Date.now();
    b2.onmousedown=function(){
        lir=1;
   }
   b2.ontouchstart=function(){
       lir=1;
   }
   b2.onmouseup=function(){
       lir=0;
   }
   b2.ontouchend=function(){
       lir=0;
   }
   b1.onmousedown=function(){
    sir=1;
}
b1.ontouchstart=function(){
   sir=1;
}
b1.onmouseup=function(){
   sir=0;
}
b1.ontouchend=function(){
   sir=0;
}
function bar(){
    yy=Math.random()*500+100;
    c2.style.bottom=yy+'px';  
  }
    setInterval(bar,2000);
    function draw(){
        pi.classList.add('cont2ani');
        kai.classList.add('cont1ani');
        var timePassed=(Date.now()-t)/1000;
        t=Date.now();
       if(lir==1){
        u=u-d*timePassed*4;
        bird.style.bottom=u+'px';
    }if(sir==1){
         u=u+d*timePassed*4;
         bird.style.bottom=u+'px';
    }if(bool){
    score=score+1;}
    gh.innerHTML=parseInt(score/200);
    if(u>694){
        u=0;
    }
    if(u<0){
        u=694;
    }
    xx=parseInt(window.getComputedStyle(pi,null).getPropertyValue('left'));
    if(xx<200 && xx>100){
      if(u>=yy-10 && u<=yy+55){
    //     console.log('good');
      }
      if(u<yy-10 || u>yy+55){
        //  console.log('bad');
         bool=false;
         pi.classList.remove('cont2ani');
         kai.classList.remove('cont1ani');
         pi.style.visibility='hidden';
         kai.style.visibility='hidden';
         sai.style.visibility='hidden';
        shai.innerHTML="<ul><li><b>GAME OVER</b></li><li>your score:"+parseInt(score/200)+"</li><li><ins>reload to play again</ins></li></ul>";
        hai.style.fontSize="100px";
        hai.style.bottom="150px";
        hai.style.right="200px";
        ghai.style.visibility='hidden';
      }
    }
    }setInterval(draw,1);
}