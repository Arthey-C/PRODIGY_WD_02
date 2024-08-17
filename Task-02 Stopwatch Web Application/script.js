let hours=document.getElementById('hours')
let mins=document.getElementById('mins')
let sec=document.getElementById('sec')
let lap=document.getElementById("lap")

let timerId;
let lapno=1;
function startTimer(){
    if (timerId) {
        clearInterval(timerId);  
    }
 timerId=setInterval(()=>{
        sec.innerHTML=String(parseInt(sec.innerHTML)+1).padStart(2,'0');
        if(sec.innerHTML=='60'){
           mins.innerHTML=String(parseInt(mins.innerHTML)+1).padStart(2,'0');
           sec.innerHTML='00';
        }
        if(mins.innerHTML=='60'){
            hours.innerHTML=String(parseInt(hours.innerHTML)+1).padStart(2,'0');
            sec.innerHTML='00';
            mins.innerHTML='00';
         }
           
    },1000)
}

function lapTimer(){
    console.log("Stopping the timer with ID:", timerId);
    let curr_lap = document.createElement("p");
    curr_lap.innerText=`#${lapno} ${hours.innerHTML}:${mins.innerHTML}:${sec.innerHTML}`
    lap.appendChild(curr_lap)
    lapno+=1;
    curr_lap=''
}

function resetTimer(){
    clearInterval(timerId); 
    lapno=1;
    sec.innerHTML='00';
    mins.innerHTML='00';
    hours.innerHTML='00';
    lap.innerHTML='';

}