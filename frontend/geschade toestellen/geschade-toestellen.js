document.getElementById('search').addEventListener('submit', async function(event){
    event.preventDefault();

    let searchTerm = document.getElementById('SearchTerm').value;
    sessionStorage.setItem('searchTerm', searchTerm); 

    window.location.reload();
});

















document.addEventListener('DOMContentLoaded',function(){
    let counter=1;
    let searchTerm = sessionStorage.getItem('searchTerm');
           
    if (!searchTerm) {
       
        return;
    }
    getData(`http://localhost:3000/uitleen_displayy/${searchTerm}`).then(data=>{
    console.log(data);
    let items= data.data.data;
    document.getElementById('delete1').addEventListener('click',()=>clickitem(items[0]._id));
    console.log(items[0]._id);
    for(let i=0; i < items.length;i++){
        let item= items[i];
        let info= ['naam','mail','Schade','StuId','ProductId'];
        
        info.forEach(element => {
            let listitem=document.getElementById(counter.toString());
            listitem.textContent=`${item[element]}`;   
            counter++;
            
            
        });
    }
    });
 

    });
    function clickitem(itemid){
        console.log(itemid)
         
       deleteData(`http://localhost:3000/SchadeDelete/${itemid}`).then(Response=>{
           
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

    
    
document.getElementById('geschade').addEventListener('click',function(){
    window.location.href= "../geschade toestellen addentry/newentry.html";
})
 


    

















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