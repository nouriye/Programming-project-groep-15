document.getElementById('search').addEventListener('submit', async function(event){
    event.preventDefault();

    let searchTerm = document.getElementById('SearchTerm').value;
    sessionStorage.setItem('searchTerm', searchTerm); // Sla de zoekterm op in sessionStorage

    window.location.reload();
});





document.addEventListener('DOMContentLoaded',function(event){
    
    console.log('okay')
    let counter =1;
    let counter2=0;
    let searchTerm = sessionStorage.getItem('searchTerm');
    
    if (searchTerm) {
        
         searchItems(event);
         // Verwijder de zoekterm uit sessionStorage na gebruik
      
    }



    
    

    async function searchItems(event){
        event.preventDefault();

        //let prodname= document.getElementById('SearchTerm').value;
        let prodname = sessionStorage.getItem('searchTerm');
        console.log(prodname);
      
        try{ 

    await getData(`http://localhost:3000/Toestel_inleveren/${prodname}`,'GET').then(data=>{
        let div1= document.getElementById('div1')
        let div2= document.getElementById('div2')
        let div3 = document.getElementById('div3');
        let div4 = document.getElementById('div4');
        let div5 = document.getElementById('div5');
        let div6 = document.getElementById('div6');
        let div7 = document.getElementById('div7');
        let div8 = document.getElementById('div8');
        let div9 = document.getElementById('div9');
        

        console.log(data) 
        let item= data.data[counter2] 
//item1
        let listitem1= document.getElementById(counter.toString());
        listitem1.textContent= `${item.Naam}`
        listitem1.addEventListener('click',()=>clickitem(item._id,div1))
        counter++;

        let listitem2= document.getElementById(counter.toString());
        listitem2.textContent= `${item.StuId}`
        listitem2.addEventListener('click',()=>clickitem(item._id,div1))
        counter++

        let listitem3= document.getElementById(counter.toString());
        listitem3.textContent= `${item.Toestelnaam}`
        listitem3.addEventListener('click',()=>clickitem(item._id,div1))
        counter++    
        
        let listitem4= document.getElementById(counter.toString());
        listitem4.textContent= `${item.product_Id}`
        listitem4.addEventListener('click',()=>clickitem(item._id,div1))
        counter++    
//item 1
        if (data.data.length === 1) {
            return;
        }
        let listitem5= document.getElementById(counter.toString());
        listitem5.textContent= `${item.sdatum}`
        listitem5.addEventListener('click',()=>clickitem(item._id,div1))
        counter++

        let listitem6= document.getElementById(counter.toString());
        listitem6.textContent= `${item.edatum}`
        listitem6.addEventListener('click',()=>clickitem(item._id,div1))
       
        //item2
        counter2++
         
        counter++ 
        let listitem7= document.getElementById(counter.toString());
        listitem7.textContent= `${item.Naam}` 
        listitem7.addEventListener('click',()=>clickitem(item._id,div2))
        counter++
        let listitem8= document.getElementById(counter.toString());
        listitem8.textContent= `${item.StuId}` 
        listitem8.addEventListener('click',()=>clickitem(item._id,div2))
        counter++
        let listitem9= document.getElementById(counter.toString());
        listitem9.textContent= `${item.Toestelnaam}`
        listitem9.addEventListener('click',()=>clickitem(item._id,div2))
        counter++
        let listitem10= document.getElementById(counter.toString());
        listitem10.textContent= `${item.product_Id}` 
        listitem10.addEventListener('click',()=>clickitem(item._id,div2))
        counter++
        let listitem11= document.getElementById(counter.toString());
        listitem11.textContent= `${item.sdatum}` 
        listitem11.addEventListener('click',()=>clickitem(item._id,div2))
        counter++
        let listitem12= document.getElementById(counter.toString());
        listitem12.textContent= `${item.edatum}`
        listitem12.addEventListener('click',()=>clickitem(item._id,div2))
  
        counter2++
       //item3
        counter++ 
        let listitem13= document.getElementById(counter.toString());
        listitem13.textContent= `${item.Naam}` 
        listitem13.addEventListener('click',()=>clickitem(item._id,div3))
        counter++
        let listitem14= document.getElementById(counter.toString());
        listitem14.textContent= `${item.StuId}` 
        listitem14.addEventListener('click',()=>clickitem(item._id,div3))
        counter++
        let listitem15= document.getElementById(counter.toString());
        listitem15.textContent= `${item.Toestelnaam}`
        listitem15.addEventListener('click',()=>clickitem(item._id,div3))
        counter++
        let listitem16= document.getElementById(counter.toString());
        listitem16.textContent= `${item.product_Id}` 
        listitem16.addEventListener('click',()=>clickitem(item._id,div3))
        counter++
        let listitem17= document.getElementById(counter.toString());
        listitem17.textContent= `${item.sdatum}` 
        listitem17.addEventListener('click',()=>clickitem(item._id,div3))
        counter++
        let listitem18= document.getElementById(counter.toString());
        listitem18.textContent= `${item.edatum}`
        listitem18.addEventListener('click',()=>clickitem(item._id,div3))
  
        counter2++
        //item 4
        counter++ 
        let listitem19= document.getElementById(counter.toString());
        listitem19.textContent= `${item.StuId}` 
        listitem19.addEventListener('click',()=>clickitem(item._id,div4))
        counter++
        let listitem20= document.getElementById(counter.toString());
        listitem20.textContent= `${item.Naam}` 
        listitem20.addEventListener('click',()=>clickitem(item._id,div4))
        counter++
        let listitem21= document.getElementById(counter.toString());
        listitem21.textContent= `${item.product_Id}`
        listitem21.addEventListener('click',()=>clickitem(item._id,div4))
        counter++
        let listitem22= document.getElementById(counter.toString());
        listitem22.textContent= `${item.Toestelnaam}` 
        listitem22.addEventListener('click',()=>clickitem(item._id,div4))
        counter++
        let listitem23= document.getElementById(counter.toString());
        listitem23.textContent= `${item.sdatum}` 
        listitem23.addEventListener('click',()=>clickitem(item._id,div4))
        counter++
        let listitem24= document.getElementById(counter.toString());
        listitem24.textContent= `${item.edatum}`
        listitem24.addEventListener('click',()=>clickitem(item._id,div4))
        counter++
        counter2++
        // item1 (duplicate)
        
        let listitem25 = document.getElementById(counter.toString());
        listitem25.textContent = `${item.StuId}`;
        listitem25.addEventListener('click', () => clickitem(item._id, div5));
        counter++;
        
        let listitem26 = document.getElementById(counter.toString());
        listitem26.textContent = `${item.Naam}`;
        listitem26.addEventListener('click', () => clickitem(item._id, div5));
        counter++;
        
        let listitem27 = document.getElementById(counter.toString());
        listitem27.textContent = `${item.product_Id}`;
        listitem27.addEventListener('click', () => clickitem(item._id, div5));
        counter++;
        
        let listitem28 = document.getElementById(counter.toString());
        listitem28.textContent = `${item.Toestelnaam}`;
        listitem28.addEventListener('click', () => clickitem(item._id, div5));
        counter++;
        
        let listitem29 = document.getElementById(counter.toString());
        listitem29.textContent = `${item.sdatum}`;
        listitem29.addEventListener('click', () => clickitem(item._id, div5));
        counter++;
        
        let listitem30 = document.getElementById(counter.toString());
        listitem30.textContent = `${item.edatum}`;
        listitem30.addEventListener('click', () => clickitem(item._id, div5));
        
        // item2 (duplicate)
        counter2++;
       
        counter++;
        let listitem31 = document.getElementById(counter.toString());
        listitem31.textContent = `${item.StuId}`;
        listitem31.addEventListener('click', () => clickitem(item._id, div6));
        counter++;
        let listitem32 = document.getElementById(counter.toString());
        listitem32.textContent = `${item.Naam}`;
        listitem32.addEventListener('click', () => clickitem(item._id, div6));
        counter++;
        let listitem33 = document.getElementById(counter.toString());
        listitem33.textContent = `${item.product_Id}`;
        listitem33.addEventListener('click', () => clickitem(item._id, div6));
        counter++;
        let listitem34 = document.getElementById(counter.toString());
        listitem34.textContent = `${item.Toestelnaam}`;
        listitem34.addEventListener('click', () => clickitem(item._id, div6));
        counter++;
        let listitem35 = document.getElementById(counter.toString());
        listitem35.textContent = `${item.sdatum}`;
        listitem35.addEventListener('click', () => clickitem(item._id, div6));
        counter++;
        let listitem36 = document.getElementById(counter.toString());
        listitem36.textContent = `${item.edatum}`;
        listitem36.addEventListener('click', () => clickitem(item._id, div6));
        
        // item4 (duplicate)
        counter++;
        let listitem37 = document.getElementById(counter.toString());
        listitem37.textContent = `${item.StuId}`;
        listitem37.addEventListener('click', () => clickitem(item._id, div7));
        counter++;
        let listitem38 = document.getElementById(counter.toString());
        listitem38.textContent = `${item.Naam}`;
        listitem38.addEventListener('click', () => clickitem(item._id, div7));
        counter++;
        let listitem39 = document.getElementById(counter.toString());
        listitem39.textContent = `${item.product_Id}`;
        listitem39.addEventListener('click', () => clickitem(item._id, div7));
        counter++;
        let listitem40 = document.getElementById(counter.toString());
        listitem40.textContent = `${item.Toestelnaam}`;
        listitem40.addEventListener('click', () => clickitem(item._id, div7));
        counter++;
        let listitem41 = document.getElementById(counter.toString());
        listitem41.textContent = `${item.sdatum}`;
        listitem41.addEventListener('click', () => clickitem(item._id, div7));
        counter++;
        let listitem42 = document.getElementById(counter.toString());
        listitem42.textContent = `${item.edatum}`;
        listitem42.addEventListener('click', () => clickitem(item._id, div7));
        
        // item5 (duplicate)
        counter++;
        let listitem43 = document.getElementById(counter.toString());
        listitem43.textContent = `${item.StuId}`;
        listitem43.addEventListener('click', () => clickitem(item._id, div8));
        counter++;
        let listitem44 = document.getElementById(counter.toString());
        listitem44.textContent = `${item.Naam}`;
        listitem44.addEventListener('click', () => clickitem(item._id, div8));
        counter++;
        let listitem45 = document.getElementById(counter.toString());
        listitem45.textContent = `${item.product_Id}`;
        listitem45.addEventListener('click', () => clickitem(item._id, div8));
        counter++;
        let listitem46 = document.getElementById(counter.toString());
        listitem46.textContent = `${item.Toestelnaam}`;
        listitem46.addEventListener('click', () => clickitem(item._id, div8));
        counter++;
        let listitem47 = document.getElementById(counter.toString());
        listitem47.textContent = `${item.sdatum}`;
        listitem47.addEventListener('click', () => clickitem(item._id, div8));
        counter++;
        let listitem48 = document.getElementById(counter.toString());
        listitem48.textContent = `${item.edatum}`;
        listitem48.addEventListener('click', () => clickitem(item._id, div8));
        // item 6 (duplicate)
        counter++;
        
        counter2++
        let listitem49 = document.getElementById(counter.toString());
        listitem49.textContent = `${item.StuId}`;
        listitem49.addEventListener('click', () => clickitem(item._id, div9));
        counter++;
        let listitem50 = document.getElementById(counter.toString());
        listitem50.textContent = `${item.Naam}`;
        listitem50.addEventListener('click', () => clickitem(item._id, div9));
        counter++;
        let listitem51 = document.getElementById(counter.toString());
        listitem51.textContent = `${item.product_Id}`;
        listitem51.addEventListener('click', () => clickitem(item._id, div9));
        counter++;
        let listitem52 = document.getElementById(counter.toString());
        listitem52.textContent = `${item.Toestelnaam}`;
        listitem52.addEventListener('click', () => clickitem(item._id, div9));
        counter++;
        let listitem53 = document.getElementById(counter.toString());
        listitem53.textContent = `${item.sdatum}`;
        listitem53.addEventListener('click', () => clickitem(item._id, div9));
        counter++;
        let listitem54 = document.getElementById(counter.toString());
        listitem54.textContent = `${item.edatum}`;
        listitem54.addEventListener('click', () => clickitem(item._id, div9));

        console.log(item._id);


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
sessionStorage.clear();
//document.getElementById('search').addEventListener('submit', searchItems);
}); 

/*async function searchItems(event){
    event.preventdefault();
    let prodname= document.getElementById('SearchTerm').value;
    console.log(prodname);
}*/

    function clickitem(itemid,listitem){
     console.log(itemid,listitem)
      let remove= listitem
      if(remove){
    remove.remove();
    window.location.href="../bevestiging(inleveren)/geschbev.html"
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

