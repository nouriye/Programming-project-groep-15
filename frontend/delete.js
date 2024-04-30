document.getElementById('deleteform').addEventListener("submit", event=> {

    event.preventDefault()

    let user= {}
     user.email= document.getElementById('inputemaild').value;
     user.password= document.getElementById('InputPasswordd').value;
    

    
    getData("http://localhost:3000/delete","POST",user).then(data=>{
       // console.log(data)
       sessionStorage.setItem('user',JSON.stringify(data))
       if(data.status==="Authentication succesfull"){
        alert(data.message),
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