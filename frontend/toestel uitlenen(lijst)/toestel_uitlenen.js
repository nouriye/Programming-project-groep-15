document.getElementById('search').addEventListener('submit', async function(event){
    event.preventDefault();

    let searchTerm = document.getElementById('SearchTerm').value;
    sessionStorage.setItem('searchTerm', searchTerm); // Sla de zoekterm op in sessionStorage

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
    await getData(`http://localhost:3000/displayy/${prodname}`,'GET').then(data=>{
    console.log(data);
    let items= data.data;
   
    
     
    for(let i=0; i < items.length;i++){
        let item= items[i];
        let info= ['_id','merk','model','categorie'];
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
     document.getElementById('een').addEventListener('click',()=>getid('1','3'));
     //sessionStorage.clear();
    });
     
  

function getid(IdNumber,idnumer2){
    
let prodId=document.getElementById(`${IdNumber}`).textContent;
sessionStorage.setItem('prodID',prodId)
let prodnaam=document.getElementById(`${idnumer2}`).textContent;
sessionStorage.setItem('prodnaam',prodnaam)
window.location.href = "../calendar/calendar.html";
console.log(prodId); 
return prodId
} 








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