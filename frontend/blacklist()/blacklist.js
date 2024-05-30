document.addEventListener('DOMContentLoaded',function(){
    let counter=1;
    getData("http://localhost:3000/Blacklist",'POST').then(data=>{
    console.log(data);
    let items= data.data;

    for(let i=0; i < items.length;i++){
        let item= items[i];
        let info= ['email','id','stunaam','reden'];
        
        info.forEach(element => {
            let listitem=document.getElementById(counter.toString());
            listitem.textContent=`${item[element]}`;   
            counter++;
            
            
        });
    }
    }); 
 document.getElementById('blacklistadd').addEventListener('click',function(){
    window.location.href= "../blacklist chooseuser/blacklistuser.html";


 })

    });
    
    




    

















async function getData(url,method,data){
    let resp= await fetch(url,{
        method:method,
        headers:{
            'content-type': "application/Json"
        },
        body:JSON.stringify(data)
    });
    return await resp.json();

}