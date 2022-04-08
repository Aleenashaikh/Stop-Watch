var hr_id = document.getElementById("hr")
var min_id = document.getElementById("min")
var sec_id = document.getElementById("sec")
var msec_id = document.getElementById("msec")
var play_btn = document.getElementById("play")
var laps = document.getElementsByClassName("laps")[0];
var hr = 00;
var min = 00;
var sec = 00;
var msec = 00;



function timer() {
    
    msec++;
    if (msec<10) {
        msec_id.innerHTML="0"+msec;     
    } else {
        msec_id.innerHTML=msec;
    }
  
    if(msec==100){
        sec++;
        msec=00;
        msec_id.innerHTML=msec;
        
        if (sec<10) {
            sec_id.innerHTML="0"+sec;     
        } else {
            sec_id.innerHTML=sec;
        }
    }
    if(sec==60){
        sec=00;
        min++;
        sec_id.innerHTML=sec;
        if (min<10) {
            min_id.innerHTML="0"+min; 
        } else {
            min_id.innerHTML=min;
        }
    }
    if(min==60){
        min=00;
        hr++;
        min_id.innerHTML=min;
        if (hr<10) {
            hr_id.innerHTML="0"+hr;
        } else {
            hr_id.innerHTML=hr;
        }
    }

}
var play;
function start(){
     play = setInterval(timer,10);
     play_btn.disabled=true;
}
function pause(){
    clearInterval(play);
    play_btn.disabled=false;
}
function reset(){
    msec =00;
    sec=00;
    min=00;
    hr=00;
    min_id.innerHTML="0"+min;
    hr_id.innerHTML="0"+hr;
    msec_id.innerHTML="0"+msec;
    sec_id.innerHTML="0"+sec;
    pause(); 

}
var num_rec=0;
var li;
var num;
var remove;
var timespan;
function lap(){
    
    num_rec++;
     li = document.createElement("li")
     num = document.createElement("span")
     remove = document.createElement("button")
     timespan = document.createElement("span")
    remove.innerHTML="x"

    li.setAttribute('class','lap-item')
    num.setAttribute("class","number")
    remove.setAttribute("class","remove")
    remove.setAttribute("onClick","delete_li(this.id)")
    timespan.setAttribute("class","time-span")
    remove.setAttribute("id",num_rec)
    li.setAttribute("id",num_rec)

    timespan.innerHTML=hr+" : " +min+" : "+sec+" : "+msec;
    num.innerHTML=num_rec+')';

    console.log(li)
    console.log(timespan)
    console.log(num)
    console.log(remove)
    li.append(num,timespan,remove)
    console.log(li)
    laps.append(li)
}
function delete_li(id){
    var abc = document.getElementsByTagName("li")
    var temp = abc[id-1]
    temp.setAttribute("class","hidden")
    
}
