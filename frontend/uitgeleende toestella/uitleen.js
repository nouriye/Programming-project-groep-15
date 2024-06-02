document.getElementById('search').addEventListener('submit', async function(event){
    event.preventDefault();

    let searchTerm = document.getElementById('SearchTerm').value;
    sessionStorage.setItem('searchTerm', searchTerm); 

    window.location.reload();
});







document.addEventListener('DOMContentLoaded',function(event){
    console.log('okay');
    let counter =0;
    let counter2=0;
    let idcheck= [];
    let full= false
    let searchTerm = sessionStorage.getItem('searchTerm');
    if (searchTerm) {
        
        searchItems(event);
        
     
   }


    async function searchItems(event){
        
        event.preventDefault();
        // dubbele ok => ipv lijst vol functie opnieuw auto (niet knop)uitvoeren met sessionstor prod => als de knop 2de keer wordt geklikt 
       // let prodname= document.getElementById('SearchTerm').value;
       let prodname = sessionStorage.getItem('searchTerm');
        console.log(prodname);
        
        
        try{
    await getData(`http://localhost:3000/uitleen/${prodname}`,'GET').then(data=>{
    console.log(data);
    let items= data.data;
   
    
     
    for(let i=0; i < items.length;i++){
        let item= items[i];
        let info= ['Naam','StuId','Toestelnaam','sdatum','edatum'];
       /* if(!idcheck.includes(item._id)){
            idcheck.push(item._id)
        }else return*/
            
      // eerst dubbele dus na elke zoekopdracht refreshen => moest dynamisch opgebouwd zijn => niet de case => dubbele eruit gehaald => als counter groter is dan x pagina refreshen met bool => ging niet       
        
        info.forEach(element => {
            counter++  
            /*if(counter===42){
                console.log(counter);
                
               window.location.reload();
            }*/
            let listitem=document.getElementById(counter.toString());
            listitem.textContent=`${item[element]}`; 
            
            
            
            console.log(counter)
            
        });
        
    }
    }); 
   
    //window.searchItems=searchItems;
    }catch{
        
    }finally{
        
    }


    
     }
     let Arraycounter=null;
    // document.getElementById('search').addEventListener('submit', searchItems);
     
     //sessionStorage.clear();
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

//let info= ['Naam','StuId','Toestelnaam','sdatum','edatum'];