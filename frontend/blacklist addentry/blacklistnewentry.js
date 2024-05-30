let prodid= sessionStorage.getItem('itemid');
let username= sessionStorage.getItem('stunaam');
let email= sessionStorage.getItem('email');

document.getElementById('prodid').value=prodid;
document.getElementById('email').value=email;
document.getElementById('stunaam').value=username
console.log(prodid);



document.getElementById('ProdBut').addEventListener('submit',async function(event){
    event.preventDefault();
   let ID =document.getElementById('prodid').value;
   let email= document.getElementById('stunaam').value;
   let stunaam= document.getElementById('email').value;
   let REDEN= document.getElementById('Schade').value;
  //let info= ['email','id','stunaam','reden'];
    
    console.log();

    try{
    await getData(`http://localhost:3000/BlacklistADD`,'POST',{
        StuId:ID,
        email:email,
        stunaam:stunaam,
        reden:REDEN
        
        });

    }catch{
        
    }finally{
        
    }

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