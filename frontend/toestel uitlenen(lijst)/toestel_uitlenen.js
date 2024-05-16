
document.addEventListener('DOMContentLoaded',function(){
   
    
    getData("http://localhost:3000/uitleen_display",'POST',{}).then(data=>{
    console.log(data);
data.data.data.forEach(({_id}) => {
    let listitem1= document.getElementById("1");
    listitem1.textContent= `${_id}`

   /* let retourd1= document.getElementById('2');
    retourd1.textContent= `${}`
    
    let uitleend1= document.getElementById('3');
    uitleend1.textContent= `${}`*/
     
    
    });
    }); 
    




    });
    
  /*  array.forEach(element => {
        
    });*/



  










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