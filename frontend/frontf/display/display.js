//wanneer submit haal producten op op basis van id 
document.getElementById('Search').addEventListener("submit", async event=> {

    event.preventDefault()
    //let list= document.getElementById('lijst').value;
    let counter= 0;
    let listitems=[];
try{
    //haal producten op 
   const resp= await fetch('http://localhost:3000/displayy');
   const data=await resp.json();   
   console.log(data.data)
    //zet producten op basis van id in lijst
   data.data.forEach(({merk}) => {
    let iop= document.getElementById('lijst');
       let listitem= document.createElement('li');
       listitem.textContent= merk
        iop.appendChild(listitem);
        //voeg id toe aan array
       listitems.push(merk);
       console.log(listitems);
       counter++;
       //sessionStorage.setItem(listitem)
    });

    console.log(counter);
}catch(error){
    alert;
}finally{

}
 });
 document.getElementById('lijst').addEventListener('click',async event=>{
    let product= {};
        product.merk=event.target.textContent;
    try{

        console.log(product._id)
        getitembyid("http://localhost:3000/display","POST",product).then(data=>{
            sessionStorage.setItem('product',JSON.stringify(data))
            if(data){
                console.log(data);
                alert("succes");
            }
    });
        
        //const selecteditemdata= await fetch(`http://localhost:3000/display/${ItemId}`)
        //const selecteditem= await selecteditemdata.json();
        //console.log(selecteditem);
        
    }catch(error){
     console.log(error);
    }finally{
    
    }


    });
   

    async function getitembyid(url,method,data){
        try{ 
        const resp=await fetch(url,{
            method: method,
            headers:{
                'Content-Type':"application/json",
            },body:JSON.stringify(data)
        });
        return await resp.json();
    }catch(error){
        throw error;
    }
}

/*    //check login
    getData("http://localhost:3000/display","POST",display).then(data=>{
       // console.log(data)
       //sessionStorage.setItem('user',JSON.stringify(data))

       if(data.status==="Authentication succesfull"){
        alert(data.message);
       // window.location.href = "home.html";
       }else alert(data.message);

    })
}).catch(error=>{
    console.error('error',error);
    alert("er heeft zich een fout voorgedaan bij het inloggen, gelieve opnieuw te proberen");
})


async function getitems(url,method,data){
    let resp= await fetch(url,{
        method:method,
        headers:{
            'content-type': "application/Json"
        },
        body:JSON.stringify(data)
    });
    return await resp.json();

}*/

getitems("http://localhost:3000/display",)