//pagina die toestellen ophaalt en displayed V=> select toestel => id van toestel ophalen v => pagina voor nieuwe entry v=>
    //stu id invullen in input veld V/ input veld voor schadeV/=> knop om aan database toe te voegen V 

//pagina die blacklist ophaalt=> knop => pagina die gebruikers ophaalt=> gebruiker selecteren => id van gebruiker ophalen => 
    //id van gebruiker invullen in inputveld => inputveld maken voor reden=>

        document.addEventListener('DOMContentLoaded', async function(){
            let counter =1;
            let counter2=0;
        
            try{ 
        
            await getData(`http://localhost:3000/geschade_toestellen`,'POST').then(data=>{
                let div1= document.getElementById('div1');
                let div2= document.getElementById('div2');
                let div3= document.getElementById('div3');
                let div4= document.getElementById('div4');
                let div5 = document.getElementById('div5');
                let div6 = document.getElementById('div6');
                let div7 = document.getElementById('div7');
                let div8 = document.getElementById('div8');
                let div9 = document.getElementById('div9');
                let div10 = document.getElementById('div10');
                
    
                    let item= data.data[counter2] 
             //new item
                    let listitem1= document.getElementById(counter.toString());
                    listitem1.textContent= `${item.merk}`
                    listitem1.addEventListener('click',()=>clickitem(item._id,item.model,div1))
                    counter++;
            
                    let listitem2= document.getElementById(counter.toString());
                    listitem2.textContent= `${item.model}`
                    listitem2.addEventListener('click',()=>clickitem(item._id,div1))
                    counter++
            
                    let listitem3= document.getElementById(counter.toString());
                    listitem3.textContent= `${item.categorie}`
                    listitem3.addEventListener('click',()=>clickitem(item._id,div1))
                    counter++    
                    counter2++
                    //2
                    let listitem4= document.getElementById(counter.toString());
                    listitem4.textContent= `${item.merk}`
                    listitem4.addEventListener('click',()=>clickitem(item._id,div2))
                    counter++    
        
                    let listitem5= document.getElementById(counter.toString());
                    listitem5.textContent= `${item.model}`
                    listitem5.addEventListener('click',()=>clickitem(item._idid,div2))
                    counter++
            
                    let listitem6= document.getElementById(counter.toString());
                    listitem6.textContent= `${item.categorie}`
                    listitem6.addEventListener('click',()=>clickitem(item._id,div2))
                    counter2++
                    counter++
                    //3
                    let listitem7= document.getElementById(counter.toString());
                    listitem7.textContent= `${item.merk}`
                    listitem7.addEventListener('click',()=>clickitem(item._id,div3))
                    counter++    
        
                    let listitem8= document.getElementById(counter.toString());
                    listitem8.textContent= `${item.model}`
                    listitem8.addEventListener('click',()=>clickitem(item._id,div3))
                    counter++
            
                    let listitem9= document.getElementById(counter.toString());
                    listitem9.textContent= `${item.categorie}`
                    listitem9.addEventListener('click',()=>clickitem(item._id,div3))
                    counter2++
                    counter++
                    //4
                    let listitem10= document.getElementById(counter.toString());
                    listitem10.textContent= `${item.merk}`
                    listitem10.addEventListener('click',()=>clickitem(item._id,div4))
                    counter++    
        
                    let listitem11= document.getElementById(counter.toString());
                    listitem11.textContent= `${item.model}`
                    listitem8.addEventListener('click',()=>clickitem(item._id,div4))
                    counter++
            
                    let listitem12= document.getElementById(counter.toString());
                    listitem12.textContent= `${item.categorie}`
                    listitem12.addEventListener('click',()=>clickitem(item._id,div4))
                    counter2++
                    counter++
                    //5
                    
                    let listitem13= document.getElementById(counter.toString());
                    listitem13.textContent= `${item.merk}` 
                    listitem13.addEventListener('click',()=>clickitem(item._id,div5))
                    counter++
                    let listitem14= document.getElementById(counter.toString());
                    listitem14.textContent= `${item.model}` 
                    listitem14.addEventListener('click',()=>clickitem(item._id,div5))
                    counter++
                    let listitem15= document.getElementById(counter.toString());
                    listitem15.textContent= `${item.categorie}`
                    listitem15.addEventListener('click',()=>clickitem(item._id,div5))
                    counter2++
                    counter++// 6
                    let listitem16 = document.getElementById(counter.toString());
                    listitem16.textContent = `${item.merk}`;
                    listitem16.addEventListener('click', () => clickitem(item._id, div6));
                    counter++;
                    
                    let listitem17 = document.getElementById(counter.toString());
                    listitem17.textContent = `${item.model}`;
                    listitem17.addEventListener('click', () => clickitem(item._id, div6));
                    counter++;
                    
                    let listitem18 = document.getElementById(counter.toString());
                    listitem18.textContent = `${item.categorie}`;
                    listitem18.addEventListener('click', () => clickitem(item._id, div6));
                    counter2++;
                    counter++;
                    
                    // 7
                    let listitem19 = document.getElementById(counter.toString());
                    listitem19.textContent = `${item.merk}`;
                    listitem19.addEventListener('click', () => clickitem(item._id, div7));
                    counter++;
                    
                    let listitem20 = document.getElementById(counter.toString());
                    listitem20.textContent = `${item.model}`;
                    listitem20.addEventListener('click', () => clickitem(item._id, div7));
                    counter++;
                    
                    let listitem21 = document.getElementById(counter.toString());
                    listitem21.textContent = `${item.categorie}`;
                    listitem21.addEventListener('click', () => clickitem(item._id, div7));
                    counter2++;
                    counter++;
                    
                    // 8
                    let listitem22 = document.getElementById(counter.toString());
                    listitem22.textContent = `${item.merk}`;
                    listitem22.addEventListener('click', () => clickitem(item._id, div8));
                    counter++;
                    
                    let listitem23 = document.getElementById(counter.toString());
                    listitem23.textContent = `${item.model}`;
                    listitem23.addEventListener('click', () => clickitem(item._id, div8));
                    counter++;
                    
                    let listitem24 = document.getElementById(counter.toString());
                    listitem24.textContent = `${item.categorie}`;
                    listitem24.addEventListener('click', () => clickitem(item._id, div8));
                    counter2++;
                    counter++;
                    
                    // 9
                    let listitem25 = document.getElementById(counter.toString());
                    listitem25.textContent = `${item.merk}`;
                    listitem25.addEventListener('click', () => clickitem(item._id, div9));
                    counter++;
                    
                    let listitem26 = document.getElementById(counter.toString());
                    listitem26.textContent = `${item.model}`;
                    listitem26.addEventListener('click', () => clickitem(item._id, div9));
                    counter++;
                    
                    let listitem27 = document.getElementById(counter.toString());
                    listitem27.textContent = `${item.categorie}`;
                    listitem27.addEventListener('click', () => clickitem(item._id, div9));
                    counter2++;
                    counter++;
                    
                    // 10
                    let listitem28 = document.getElementById(counter.toString());
                    listitem28.textContent = `${item.merk}`;
                    listitem28.addEventListener('click', () => clickitem(item._id, div10));
                    counter++;
                    
                    let listitem29 = document.getElementById(counter.toString());
                    listitem29.textContent = `${item.model}`;
                    listitem29.addEventListener('click', () => clickitem(item._id, div10));
                    counter++;
    
                    let listitem30 = document.getElementById(counter.toString());
                    listitem30.textContent = `${item.categorie}`;
                    listitem30.addEventListener('click', () => clickitem(item._id, div10));
                    counter++;
            
            })
            window.searchItems=searchItems;
        
        }catch{
        
        }finally{
        
        }
       // document.getElementById('search').addEventListener('submit', searchItems);
        });


       
        
            function clickitem(itemid,itemmodel,listitem){
             sessionStorage.setItem('itemid',itemid);
             sessionStorage.setItem('itemnaam',itemmodel);

             window.location.href= "../geschade toestellen addentry/newentry.html"
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