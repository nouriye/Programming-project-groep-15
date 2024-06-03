document.getElementById('search').addEventListener('submit', async function(event){
    event.preventDefault();

    let searchTerm = document.getElementById('SearchTerm').value;
    sessionStorage.setItem('searchTerm', searchTerm); // Sla de zoekterm op in sessionStorage

    window.location.reload();
});











document.addEventListener('DOMContentLoaded',function(){
    let counter=1;
    
    let searchTerm = sessionStorage.getItem('searchTerm');
    if (!searchTerm) {
       
        return;
        // Verwijder de zoekterm uit sessionStorage na gebruik
     
   }
    getData(`http://localhost:3000/Blacklist/${searchTerm}`).then(data=>{
    console.log(data);
    let items= data.data;
    console.log(items[0]._id);
    document.getElementById('delete1').addEventListener('click',()=>clickitem(items[0]._id));
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
 

 });
 document.getElementById('blacklistadd').addEventListener('click',function(){
    window.location.href= "../blacklist chooseuser/blacklistuser.html";

})

    
   function clickitem(itemid){
        console.log(itemid)
         
       deleteData(`http://localhost:3000/blacklistDelete/${itemid}`).then(Response=>{
           
       })
   }
 
   async function deleteData(url) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let resp = await fetch(url, options);
    return await resp.json();
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