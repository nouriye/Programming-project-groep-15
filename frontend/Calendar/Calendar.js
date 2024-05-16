/*document.addEventListener('DOMContentLoaded',function(){
let Calendar= document.getElementById('Calendar');
let CalenderNew= Fullcalendar.Calendar(Calendar,{

select:function(data){
    var StartDatum= info.startStr
    var EindDatum= info.endStr;

    fetch('/uitleentermijn',{
     method:'POST',
     headers:{ 
        'Content-Type': 'application.json',

     },
     body: JSON.stringify({startdatum:StartDatum,eindatum:Eindatum})

    }).then(Response=>{

        console.log(Response);
    })
    .catch(console.error)('fout',fout);
}
});
Calendar.render();
})*/