document.getElementById('winkelwagen').addEventListener("submit", event=> {

    event.preventDefault();

    let winkelwagen= {}
    winkelwagen.producten=document.getElementById('productsearch')
    //check login
    getData("http://localhost:3000/winkelwagen","POST",user).then(data=>{
       // console.log(data)
       if(data.status==="Authentication succesfull"){
        alert(data.message);
       // let product= document.createElement("li")
        window.location.href = "home.html";
       }else alert(data.message);
       sessionStorage.setItem('user',JSON.stringify(data))

    })
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