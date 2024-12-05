const endTime = " 6 December 2024 "
document.getElementById('tooo').innerText =endTime;
const input = document.querySelectorAll('input');


function clock(){
   const endDate = new Date(endTime);
   
   const now = new Date()
const difference = Math.floor((endDate- now)/1000);

if(difference<0) return;

input[0].value = Math.floor((difference/3600/24));//number of days 
input[1].value = Math.floor((difference/3600)%24);// hours
input[2].value = Math.floor((difference/60)%60); //min
input[3].value = Math.floor((difference)%60);

}


setInterval(()=>(

clock()
),1000)

    