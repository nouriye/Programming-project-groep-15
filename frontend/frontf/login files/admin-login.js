
document.getElementById('Adminloginform').addEventListener("submit", event=> {

    event.preventDefault()
     let user= {}
     user.email= document.getElementById('inputemail').value;
     user.password= document.getElementById('InputPassword').value;
    
    
      
    //check login
    getData("http://localhost:3000/login","POST",user).then(data=>{
       // console.log(data)
      // sessionStorage.setItem('user',JSON.stringify(data))

       if(data.status==="succes"){
        window.location.href="../../../frontend/menu/menu.html"
       
       }
      // }else alert(data.message);

    })
}).catch(error=>{
    
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
