
 document.getElementById('ProdBut').addEventListener('submit', async event =>{
event.preventDefault();
let productMerk= document.getElementById('1').value;
let productModel= document.getElementById('2').value;
let productCat= document.getElementById('3').value;

let product={
merk: productMerk,
model: productModel,
categorie: productCat
}
window.location.href="../bevestiging(publi)/geschbev.html"
    try{  
   await getData("http://localhost:3000/RegisterProduct",'POST',product).then(data=>{
    console.log(data);

    })
}catch(error){
console.error(error);
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