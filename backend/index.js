const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const cors= require('cors')
const{v4:uuidv4,validate: uuidValidate}= require('uuid');
const {MongoClient, UUID, Timestamp, ObjectId}= require('mongodb')
require('dotenv').config()
app.use(bodyParser.json());
const mongoose= require('mongoose');
const User = require('./Models/user');
const bcrypt = require('bcrypt');
const https= require('https');
const fs= require('fs');
const { Console } = require('console');



//mongoclient 
const client= new MongoClient(process.env.FINAL_URL);
//users array
let users=[];

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())

//mongodb
/*const options = {
    key: fs.readFileSync('E:\\key\\domain.key'),
    cert: fs.readFileSync('E:\\key\\domain.crt')
};*/
mongoose.connect(process.env.FINAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

app.get("/displayy/:prod",async(req,resp)=>{

    try{
        await client.connect();
         const prodnaam= req.params.prod
         const coll= client.db('login').collection('producten');
         const winkelmand= await coll.find({model:prodnaam}).toArray();
        
        console.log(winkelmand)
        resp.status(200).send({
            status:"succes",
            data:winkelmand
        }) 
        
    
    }catch(error){
    
    }finally{
        await client.close();
    }
});
app.get("/Toestel_inleveren/:stunaam",async(req,resp)=>{
    try{
        await client.connect()
        const stunaam= req.params.stunaam;
        //uitleningen data ophalen 
        let Uitleningen_Db=client.db('login').collection('uitleningen');
        let Uitleningen_Data= await Uitleningen_Db.find({Naam:stunaam}).toArray();
    
        resp.status(200).send({
            status:"ok",
            data:Uitleningen_Data
        });
    }catch(error){
    
    }finally{
        await client.close();
    }
    
    });
app.post("/display",async(req,resp)=>{
    
    
    try{
        await client.connect();
        const coll= client.db('login').collection('producten');
        const querry= { merk : req.body.merk};
        const results=await coll.findOne(querry);

        const coll2= client.db('login').collection('winkelmand');
            const winkelmand={
                Geselecteerde_Apparaten: [results],
                datum: "nu",
                
                
            }
            const results2= await coll2.insertOne(winkelmand);
       
            
           
           
        resp.status(200).send({
            status:'ok',
            data: {merk:results.merk}
            
        });
        
       
    }catch(error){

    resp.status(500).json({ status: 'fout', message: 'error'})

    }finally{
await client.close();
    }
});

app.post("/uitleentermijn",async(req,resp)=>{

    let Startdatum= req.body.Startdatum;
    let Einddatum= req.body.Einddatum;
    let prodid= req.body.ToestelId;
    try{
        await client.connect();
        const KalenderData= client.db('login').collection('uitleningen');
         
        
        var uitleentermijn={
            
            product_Id:prodid,
            sdatum:Startdatum,
            edatum: Einddatum
        }
        const results= await KalenderData.insertOne(uitleentermijn);
        
        resp.status(200).send({
            status:'ok',
            data:results
            
        });

    }catch(error){
        
    }finally{
await client.close();
    }
    

});
app.post("/uitleen",async(req,resp)=>{
    try{  await client.connect()
        let datareq= client.db('login').collection('uitleningen');
        let datareq2= await datareq.find({}).toArray();
        resp.status(200).send({
            status:'ok',
            data:{
                data:datareq2,
            }
            });
        

    }catch{

    }finally{
        
    }

  
});

app.post("/uitleen_display",async(req,resp)=>{
    try{  await client.connect()
        let datareq= client.db('login').collection('Schadelijst');
        let datareq2= await datareq.find({}).toArray();
        resp.status(200).send({
            status:'ok',
            data:{
                data:datareq2,
            }
            });
        

    }catch{

    }finally{
        
    }

  
});
app.post("/users",async(req,resp)=>{
    try{
        await client.connect()
        let Toestellen_Db=client.db('login').collection('users');
        let Toestellen_Db_Data=await Toestellen_Db.find({}).toArray();

        resp.status(200).send({
            status:'ok',
            data:Toestellen_Db_Data
        });
    }catch(error){

    }finally{
        await client.close();
    }
});

app.post("/geschade_toestellen",async(req,resp)=>{
    try{
        await client.connect()
        let Toestellen_Db=client.db('login').collection('producten');
        let Toestellen_Db_Data=await Toestellen_Db.find({}).toArray();

        resp.status(200).send({
            status:'ok',
            data:Toestellen_Db_Data
        });
    }catch(error){

    }finally{
        await client.close();
    }
});
app.post("/geschade_toestellenlist",async(req,resp)=>{
    let gegevens={ 
        ProductId:req.body.prodid,
        prodnaam:req.body.prodnaam,
        StuId:req.body.stuid,
        mail:req.body.mail,
        naam:req.body.naam,
        Schade:req.body.Schade

    }
    try{
        
        
        await client.connect()
        let Toestellen_Db=client.db('login').collection('Schadelijst');
        await Toestellen_Db.insertOne(gegevens)

        resp.status(200).send({
            status:'ok',
            data:Toestellen_Db
        });
    }catch(error){

    }finally{
        await client.close();
    }
});
app.post("/BlacklistADD",async(req,resp)=>{
    let gegevens={ 
        StuId:req.body.StuId,
        email:req.body.email,
        stunaam:req.body.stunaam,
        reden:req.body.reden
    }
    try{
         
        
        await client.connect()
        let Toestellen_Db=client.db('login').collection('Blacklist');
        await Toestellen_Db.insertOne(gegevens)

        resp.status(200).send({
            status:'ok',
            data:Toestellen_Db
        });
    }catch(error){

    }finally{
        await client.close();
    }
});

app.post("/blacklist",async(req,resp)=>{
    try{
        await client.connect()
        let Blacklist_db=client.db('login').collection('Blacklist');
        let Blacklist_Db_Data=await Blacklist_db.find({}).toArray();

        resp.status(200).send({
            status:'ok',
            data:Blacklist_Db_Data
        });
    }catch(error){

    }finally{
        await client.close();
    }
});
app.get("/Toestel_inleveren/:stunaam",async(req,resp)=>{
try{
    await client.connect()
    const stunaam= req.params.stunaam;
    let Uitleningen_Db=client.db('login').collection('uitleningen');
    let Uitleningen_Data= await Uitleningen_Db.find({Naam:stunaam}).toArray();

    resp.status(200).send({
        status:"ok",
        data:Uitleningen_Data
    });
}catch(error){

}finally{
    await client.close();
}

});

app.get("/Toestel/:id", async (req, res) => {
    try {
        await client.connect();
        const id = req.params.id;
        let Uitleningen_Db = client.db('login').collection('uitleningen');
        let item = await Uitleningen_Db.findOne({ _id: new ObjectId(id)});

    } catch (error) {
        console.error(error);
        
    } finally {
        await client.close();
    }
});

app.delete("/Toestel/:id", async (req, res) => {
    try {
        await client.connect();
        const id = req.params.id;
        let Uitleningen_Db = client.db('login').collection('uitleningen');
        let result = await Uitleningen_Db.deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: "error",
            message: error.message
        });
    } finally {
        await client.close();
    }
});

app.get(`/unavailable-dates/:prodid`, async (req, resp) => {
    try {
        await client.connect();
        const stunaam= req.params.stunaam;//
        const KalenderData = client.db('login').collection('uitleningen');
        const results = await KalenderData.find({id:stunaam}).toArray();

        resp.status(200).send(results);
    } catch (error) {
       
    } finally {
        await client.close();
    }
});
app.post ("/RegisterProduct",async (req,res)=>{
    if(!req.body.merk || !req.body.model || !req.body.categorie){
       return
    }
    try{
        await client.connect();
        const product= {
            merk: req.body.merk,
            model:req.body.model,
            categorie: req.body.categorie,
        }
        const coll= client.db('login').collection('producten');
        const inserted= await coll.insertOne(product) 
    }catch(error){
         }finally{
            await client.close();    
         }
    })     
app.post("/login",async(req,res)=>{
            if( !req.body.email || !req.body.password){
                return
            }else{
                try{
                    await client.connect();
                    const { email, password } = req.body;
                    const coll= client.db('login').collection('users');
                    const user=  await coll.findOne({email});

                    if(!user.passwordHash){
                    
        
                        if(user.password == password){
                         const num= 10;
                         const hash= await bcrypt.hash(password,num);
                         
                         await coll.updateOne({email: user.email},
                            {$set :{passwordHash :hash}});
                            res.status(200).send({
                                status: "Authentication succesfull",
                                message:"you're finally awake",
                                data: {
                                   user } 
        
                                
                            });
                        }else{
                            res.status(401).send({
                                message:"password is incorrect"
                            });
                        }
                               
                        }else{
                        
                            const verify= await bcrypt.compare(password,user.passwordHash);
                            if(verify){
                                return res.status(200).send({
                                    message:"you are logged in",
                                    data: user
                                });
                                
                            }else{
                                res.status(401).send({
                                    message:"password is incorrect"
                                });
                            }
                        }
                        
                
                     }catch(error){
                    res.status(500).send({
                        error:"something went wrong"
                    })
                     }finally{
                     await client.close();
                     }
                
          
        
            }
            
        });

      /*  https.createServer(options, app).listen(3000, () => {
            console.log('HTTPS server is running on port 3000');
        });*/ app.listen(3000);
              console.log('app running');
