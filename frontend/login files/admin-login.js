
document.getElementById('Adminloginform').addEventListener("submit", event=> {
    event.preventDefault()
    let user= {}
     user.email= document.getElementById('inputemail').value;
     user.password= document.getElementById('InputPassword').value;
    //check login
    getData("http://localhost:3000/login","POST",user).then(data=>{
       sessionStorage.setItem('user',JSON.stringify(data))
       if(data.status==="Authentication succesfull"){
        alert(data.message);
       //
       }else alert(data.message);

    })
}).catch(error=>{
    console.error('error',error);
    alert("fout bij het inloggen");
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
