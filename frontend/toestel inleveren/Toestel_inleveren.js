document.addEventListener('DOMContentLoaded',function(){
    let counter =1;
    let counter2=0;
    getData("http://localhost:3000/Toestel_inleveren",'GET').then(data=>{
        console.log(data)
        let item= data.data[counter2]
        let listitem1= document.getElementById(counter.toString());
        listitem1.textContent= `${item._id}`
        counter++;
        let listitem2= document.getElementById(counter.toString());
        listitem2.textContent= `${item.uitleen_datum}`
        counter++
        let listitem3= document.getElementById(counter.toString());
        listitem3.textContent= `${item.Retour_datum}`
        listitem3.addEventListener('click',()=>clickitem(item._id,listitem3))
        counter2++
        let item2= data.data[counter2]
        counter++ 
        let listitem4= document.getElementById(counter.toString());
        listitem4.textContent= `${item2._id}` 
        listitem4.addEventListener('click',()=>clickitem(item2._id,listitem4))
        counter++
        let listitem5= document.getElementById(counter.toString());
        listitem5.textContent= `${item2.uitleen_datum}` 
        listitem5.addEventListener('click',()=>clickitem(item2._id,listitem5))
        counter++
        let listitem6= document.getElementById(counter.toString());
        listitem6.textContent= `${item2.Retour_datum}`
        listitem6.addEventListener('click',()=>clickitem(item2._id,listitem6))

        let div1= document.getElementById('div1')
        listitem1.addEventListener('click',()=>clickitem(item._id,div1))
        let div2= document.getElementById('div2')
        listitem2.addEventListener('click',()=>clickitem(item._id,div2))
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
});

    function clickitem(itemid,listitem){
     console.log(itemid)
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