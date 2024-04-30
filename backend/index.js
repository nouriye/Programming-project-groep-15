const express = require('express');
const app= express();
const cors= require('cors')
const{v4:uuidv4,validate: uuidValidate}= require('uuid');
const {MongoClient, UUID}= require('mongodb')
require('dotenv').config()

//mongoclient 
const client= new MongoClient(process.env.FINAL_URL);
//users array
let users=[];

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())

//mongodb

app.get("/mongo", async (req,resp)=> {
    try{
        await client.connect();

        const coll= client.db('login').collection('users');
        const users= await coll.find({}).toArray();
        resp.status(200).send(users);
    }catch(error){
        console.log(error)
        resp.status(500).send({
            error: 'something went wrong',
            value:error
        });
         }finally{
            await client.close()    
         }
})

//create
// check for empty fields
app.post ("/register",async (req,res)=>{
if(!req.body.username || !req.body.email || !req.body.password){
    res.status(401).send({
        status: "bad request",
        message: "some field are missing"
    });return

}

/*save users to Array 
users.push({
username:req.body.username,
email:req.body.email,
password:req.body.password,
})*/
try{
    await client.connect();

    const user= {
        username: req.body.username,
        email:req.body.email,
        password:req.body.password,
        uuid: uuidv4() 
    }
    const coll= client.db('login').collection('users');
    const insert= await coll.insertOne(user)
    
    // response if okay
res.status(201).send({
    status:"Authentication succesfull",
    message: "user saved",
    data: insert
})
}catch(error){
    console.log(error)
    resp.status(500).send({
        error: 'something went wrong',
        value:error
    });
     }finally{
        await client.close();    
     }
})

/*save users to Array 
users.push({
username:req.body.username,
email:req.body.email,
password:req.body.password,
})*/
console.log(users)

//read
app.post("/login",async(req,res)=>{
    if( !req.body.email || !req.body.password){
        res.status(401).send({
            status: "bad request",
            message: "some field are missing"
        }); return
    }else{
        try{
            await client.connect();
        
            const loginuser= {
                
                email:req.body.email,
                password:req.body.password
            };
            const coll= client.db('login').collection('users');
            //const insert= await coll.insertOne(user)
            const query={email :loginuser.email}
            const user= await coll.findOne(query)
              
            if(user){

                if(user.password == loginuser.password){
            
                    res.status(200).send({
                        status: "Authentication succesfull",
                        message:"you're finally awake",
                        data: {
                            username:user.username,
                            email:user.email,
                            uuid:user.uuid, } 

                        
                    });
                }else{
                    res.status(401).send({
                        status: "Authentication error",
                        message:"password in incorrect"
                    }); 
                     }
                }else{
                    res.status(401).send({
                        status: "Authentication error",
                        message:"no user been found"
                    })        
                   }
          // response if okay
        /*res.status(201).send({
            status:"nahh",
            message: "user saved",
            data: insert
        });*/
        }catch(error){
            console.log(error)
            res.status(500).send({
                error: 'something went wrong',
                value:error
            });
             }finally{
                await client.close();    
             }
        
    //check for user in array
//let user=users.find(Element=>Element.email == req.body.email)

    }
    
});
//verify 
app.post("/verifylogin",async(req,res)=>{
    if(!req.body.uuid){
        res.status(401).send({
            status: "bad request",
            message: "some field are missing"
        });return 
    }else{
        if(!uuidValidate(req.body.uuid)){
            res.status(401).send({
                status: "bad request",
                message: "invalid uid"
            });return
        }
        try{
            await client.connect();
        
            const loginuser= {
                
                email:req.body.email,
                password:req.body.password
            };
            const coll= client.db('login').collection('users');
            //const insert= await coll.insertOne(user)
            const query={uuid : req.body.uuid}
            const user= await coll.findOne(query)
              
            if(user){

                    res.status(200).send({
                        status: "Authentication succesfull",
                        message:"Looks like meat is back on the menu boys!",
                        data:{username:user.username,
                        email:user.email,
                    uuid:user.uuid}
                    });
                }else{
                    res.status(401).send({
                        status: "verify error",
                        message:"no uid exists"
                    }) 
                     
                }
          // response if okay
        /*res.status(201).send({
            status:"nahh",
            message: "user saved",
            data: insert
        });*/
        }catch(error){
            console.log(error)
            res.status(500).send({
                error: 'something went wrong',
                value:error
            });
             }finally{
                await client.close();    
             }
        
    //check for user in array
//let user=users.find(Element=>Element.email == req.body.email)

    }
    
});
//delete
app.post("/delete",async(req,res)=>{
    if( !req.body.email || !req.body.password){
        res.status(401).send({
            status: "bad request",
            message: "some field are missing"
        }); return
    }else{
        try{
            await client.connect();
        
            const loginuser= {
                
                email:req.body.email,
                password:req.body.password
            };
            const coll= client.db('login').collection('users');
            //const insert= await coll.insertOne(user)
            const query={email :loginuser.email}
            const user= await coll.findOne(query)
            console.log('user');
            console.log('loginuser');
              
            if(user){

                if(user.password == loginuser.password){
                    await coll.deleteOne(user);
                    
                    res.status(200).send({
                        status: "Authentication succesfull",
                        message:"user sucessully deleted",
                        data: {
                            username:user.username,
                            email:user.email,
                            uuid:user.uuid, } 

                        
                    });
                }else{
                    res.status(401).send({
                        status: "error",
                        message:"password in incorrect"
                    }); 
                     }
                }else{
                    res.status(401).send({
                        status: "Authentication error",
                        message:"no user been found"
                    })        
                   }
          // response if okay
        /*res.status(201).send({
            status:"nahh",
            message: "user saved",
            data: insert
        });*/
        }catch(error){
            console.log(error)
            res.status(500).send({
                error: 'something went wrong',
                value:error
            });
             }finally{
                await client.close();    
             }
        
    //check for user in array
//let user=users.find(Element=>Element.email == req.body.email)

    }
    
});


//update 
app.post("/update",async(req,res)=>{
    if( !req.body.email || !req.body.password){
        res.status(401).send({
            status: "bad request",
            message: "some field are missing"
        }); return
    }else{
        try{
            await client.connect();
        
            const loginuser= {
                
                email:req.body.email,
                password:req.body.password
            };
            const coll= client.db('login').collection('users');
            //const insert= await coll.insertOne(user)
            const query={email :loginuser.email}
            const user= await coll.findOne(query)
            
              
            if(user){

                if(user.email == loginuser.email){
                    const result= await coll.updateOne(
                        {email: user.email},
                        {$set :{password :loginuser.password}});
                    res.status(200).send({
                        status: "Authentication succesfull",
                        message:"user sucessully updated",
                        data: {
                            username:user.username,
                            email:user.email,
                            uuid:user.uuid, } 

                        
                    });
                }else{
                    res.status(401).send({
                        status: "error",
                        message:"password in incorrect"
                    }); 
                     }
                }else{
                    res.status(401).send({
                        status: "Authentication error",
                        message:"no user been found"
                    })        
                   }
    
        }catch(error){
            console.log(error)
            res.status(500).send({
                error: 'something went wrong',
                value:error
            });
             }finally{
                await client.close();    
             }
    }

    
});

app.post("/winkelwagen",async(req,res)=>{
    /*if( !req.body.email || !req.body.password){
        res.status(401).send({
            status: "bad request",
            message: "some field are missing"
        }); return*/
    
        try{
            await client.connect();
            let producten= [];
            let productdata= {
                producten=[],
            };
             // productenlijst ophalen
             const coll= client.db('producten').collection('users');
             //product dat je wilt selecteren uit de lijst ophalen
             const query={producten:winkelwagen.producten}
             //const item= await coll.find(query);
 
             //winkelmand ophalen 
             const inventory= client.db('winkelmand').collection('users'),   
            if(productdata){

                if(!producten){
             // product toevoegen aan winkelmand 
             const update=inventory.insertOne(query);
                    res.status(200).send({
                        status: "Authentication succesfull",
                        message:"ok",
                        data: {
                            username:user.username,
                            email:user.email,
                            uuid:user.uuid, } 
                    
                        
                    });
                    
                }else{
                    res.status(401).send({
                        status: "Authentication error",
                        message:"password in incorrect"
                    }); 
                     }
                }else{
                    res.status(401).send({
                        status: "Authentication error",
                        message:"no user been found"
                    })        
                   }
          // response if okay
        /*res.status(201).send({
            status:"nahh",
            message: "user saved",
            data: insert
        });*/
        }catch(error){
            console.log(error)
            res.status(500).send({
                error: 'something went wrong',
                value:error
            });
             }finally{
                await client.close();    
             }
        
    //check for user in array
//let user=users.find(Element=>Element.email == req.body.email)

    }
    
});


app.listen(3000);
console.log('app running');
