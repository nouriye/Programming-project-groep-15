document.addEventListener('DOMContentLoaded',function(){
    let counter=1;
    getData("http://localhost:3000/uitleen_display",'POST').then(data=>{
    console.log(data);
    let items= data.data.data;

    for(let i=0; i < items.length;i++){
        let item= items[i];
        let info= ['StuId','ProductId','Schade','email','stunaam'];
        
        info.forEach(element => {
            let listitem=document.getElementById(counter.toString());
            listitem.textContent=`${item[element]}`;   
            counter++;
            
            
        });
    }
    });
 

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