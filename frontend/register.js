
document.getElementById('registerform').addEventListener("submit",event=>{
    event.preventDefault();

    let user= {}
    user.username = document.getElementById('inputUsername').value;
    user.email= document.getElementById('exampleInputEmail').value;
    user.password= document.getElementById('InputPassword').value;
    user.password2= document.getElementById('RepeatInputPassword').value;
   

   //check login
   if (user.password == user.password2){ 
   getData("http://localhost:3000/register","POST",user).then(data=>{
       
       if(data.status==="Authentication succesfull"){
        alert(data.status);
        window.location.href = "login.html";
       }else alert("biem");
   })
   }else{
    alert('nee')
   } 
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