document.addEventListener('DOMContentLoaded',function(){
    let counter =1;
    let counter2=0;

    async function searchItems(event){
        event.preventDefault();
        let prodname= document.getElementById('SearchTerm').value;
        console.log(prodname);
    
        try{ 

    await getData(`http://localhost:3000/Toestel_inleveren/${prodname}`,'GET').then(data=>{
        let div1= document.getElementById('div1')
        let div2= document.getElementById('div2')


        console.log(data) 
        let item= data.data[counter2] 

        let listitem1= document.getElementById(counter.toString());
        listitem1.textContent= `${item.StuId}`
        listitem1.addEventListener('click',()=>clickitem(item._id,div1))
        counter++;

        let listitem2= document.getElementById(counter.toString());
        listitem2.textContent= `${item.Naam}`
        listitem2.addEventListener('click',()=>clickitem(item._id,div1))
        counter++

        let listitem3= document.getElementById(counter.toString());
        listitem3.textContent= `${item.id}`
        listitem3.addEventListener('click',()=>clickitem(item._id,div1))
        counter++    
        
        let listitem4= document.getElementById(counter.toString());
        listitem4.textContent= `${item.ToestelNaam}`
        listitem4.addEventListener('click',()=>clickitem(item._id,div1))
        counter++    


        let listitem5= document.getElementById(counter.toString());
        listitem5.textContent= `${item.sdatum}`
        listitem5.addEventListener('click',()=>clickitem(item._idid,div1))
        counter++

        let listitem6= document.getElementById(counter.toString());
        listitem6.textContent= `${item.edatum}`
        listitem6.addEventListener('click',()=>clickitem(item._id,div1))
       

        counter2++
        let item2= data.data[counter2] 
        counter++ 
        let listitem7= document.getElementById(counter.toString());
        listitem7.textContent= `${item2.StuId}` 
        listitem7.addEventListener('click',()=>clickitem(item2._id,div2))
        counter++
        let listitem8= document.getElementById(counter.toString());
        listitem8.textContent= `${item2.Naam}` 
        listitem8.addEventListener('click',()=>clickitem(item2._id,div2))
        counter++
        let listitem9= document.getElementById(counter.toString());
        listitem9.textContent= `${item2.id}`
        listitem9.addEventListener('click',()=>clickitem(item2._id,div2))
        counter++
        let listitem10= document.getElementById(counter.toString());
        listitem10.textContent= `${item2.ToestelNaam}` 
        listitem10.addEventListener('click',()=>clickitem(item2._id,div2))
        counter++
        let listitem11= document.getElementById(counter.toString());
        listitem11.textContent= `${item2.sdatum}` 
        listitem11.addEventListener('click',()=>clickitem(item2._id,div2))
        counter++
        let listitem12= document.getElementById(counter.toString());
        listitem12.textContent= `${item2.edatum}`
        listitem12.addEventListener('click',()=>clickitem(item2._id,div2))
  
        counter2++
        let item3= data.data[counter2] 
        counter++ 
        let listitem13= document.getElementById(counter.toString());
        listitem13.textContent= `${item3.StuId}` 
        listitem13.addEventListener('click',()=>clickitem(item3._id,div2))
        counter++
        let listitem14= document.getElementById(counter.toString());
        listitem14.textContent= `${item3.Naam}` 
        listitem14.addEventListener('click',()=>clickitem(item3._id,div2))
        counter++
        let listitem15= document.getElementById(counter.toString());
        listitem15.textContent= `${item3.id}`
        listitem15.addEventListener('click',()=>clickitem(item3._id,div2))
        counter++
        let listitem16= document.getElementById(counter.toString());
        listitem16.textContent= `${item3.ToestelNaam}` 
        listitem16.addEventListener('click',()=>clickitem(item3._id,div2))
        counter++
        let listitem17= document.getElementById(counter.toString());
        listitem17.textContent= `${item3.sdatum}` 
        listitem17.addEventListener('click',()=>clickitem(item3._id,div2))
        counter++
        let listitem18= document.getElementById(counter.toString());
        listitem18.textContent= `${item3.edatum}`
        listitem18.addEventListener('click',()=>clickitem(item3._id,div2))
  

        


        /*let div3= document.getElementById('div3')
        listitem3.addEventListener('click',()=>clickitem(item._id,div3))*/

        //ik kan ze per 3 meegeven, 

       /* let listitem7= document.getElementById(counter.toString());
        listitem7.textContent= `${_id}`
        let listitem8= document.getElementById(counter.toString());
        listitem8.textContent= `${_id}`
        let listitem9= document.getElementById(counter.toString());
        listitem9.textContent= `${_id}` 
        let listitem10= document.getElementById(counter.toString());
        listitem10.textContent= `${_id}`*/
    })
    window.searchItems=searchItems;

}catch{

}finally{

}
}
document.getElementById('search').addEventListener('submit', searchItems);
}); 

async function searchItems(event){
    event.preventdefault();
    let prodname= document.getElementById('SearchTerm').value;
    console.log(prodname);
}

    function clickitem(itemid,listitem){
     console.log(itemid,listitem)
      let remove= listitem
      if(remove){
    remove.remove();
      }else{
    console.error("not found")
    }
    deleteData(`http://localhost:3000/Toestel/${itemid}`).then(Response=>{
        if(Response.status=='ok'){
           console.log("succes")
        }else{
            console.error("failed")
        }
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

