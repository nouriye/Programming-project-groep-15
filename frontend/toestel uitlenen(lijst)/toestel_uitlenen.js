
document.addEventListener('DOMContentLoaded',function(){
    
    let counter =1;
    let counter2=0;
    async function searchItems(event){
        event.preventDefault();
        let prodname= document.getElementById('SearchTerm').value;
        console.log(prodname);
        try{
    await getData(`http://localhost:3000/displayy/${prodname}`,'GET').then(data=>{
    console.log(data);
    let items= data.data;

    for(let i=0; i < items.length;i++){
        let item= items[i];
        let info= ['_id','merk','model','categorie'];
        
        info.forEach(element => {
            let listitem=document.getElementById(counter.toString());
            listitem.textContent=`${item[element]}`;   
            counter++;
            
            
        });
    }
    }); 
   
    window.searchItems=searchItems;
    }catch{
        
    }finally{
        
    }


    
     }
     let Arraycounter=null;
     document.getElementById('search').addEventListener('submit', searchItems);
     document.getElementById('een').addEventListener('click',()=>getid('1','3'));

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