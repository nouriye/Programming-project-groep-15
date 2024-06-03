    let prodid= sessionStorage.getItem('itemid');
    let prodnaam= sessionStorage.getItem('itemnaam');
    let stuid=sessionStorage.getItem('stuid');
    let email=sessionStorage.getItem('email');
    let stunaam=sessionStorage.getItem('stunaam');
    document.getElementById('product').addEventListener('click',function(){
        window.location.href= "../geschade toestellen chooseproduct/addentry.html";
    })
    document.getElementById('gebruiker').addEventListener('click',function(){
        window.location.href= "../geschade toestellen chooseuser/addperson.html";
    })
     
    document.getElementById('prodid').value=prodid;
    document.getElementById('prodnaam').value=prodnaam;
    document.getElementById('Stud_ID').value=stuid;
    document.getElementById('mail').value=email;
    document.getElementById('naam').value=stunaam;
    
    console.log(prodid);

 

    document.getElementById('ProdBut').addEventListener('submit',async function(event){
        event.preventDefault();
        let ID=document.getElementById('prodid').value;
        let prodnaam=document.getElementById('prodnaam').value;
        let STUID=document.getElementById('Stud_ID').value;
        let mail=document.getElementById('mail').value;
        let naam= document.getElementById('naam').value;
        let SCHADE= document.getElementById('Schade').value
        
        console.log(ID,STUID,SCHADE);
        window.location.href = "../bevestiging(geschade)/geschbev.html"; 
        try{
        await getData(`http://localhost:3000/geschade_toestellenlist`,'POST',{
            prodid:ID,
            prodnaam:prodnaam,
            stuid: STUID,
            mail:mail,
            naam:naam,
            Schade:SCHADE
            
            });

        }catch{
            
        }finally{
            sessionStorage.clear();
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