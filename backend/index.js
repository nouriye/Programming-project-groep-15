const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const cors= require('cors')
const{v4:uuidv4,validate: uuidValidate}= require('uuid');
const {MongoClient, UUID, Timestamp, ObjectId}= require('mongodb')
require('dotenv').config()
app.use(bodyParser.json()); 
const client= new MongoClient(process.env.FINAL_URL);
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())

app.get("/displayy",async(req,resp)=>{

    try{
        await client.connect();
         const coll= client.db('login').collection('producten');
         const winkelmand= await coll.find({}).toArray();
        
        console.log(winkelmand)
        resp.status(200).json({
            status:"succes",
            data:winkelmand
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
    console.error(error);
    }finally{
await client.close();
    }
});
app.post("/uitleentermijn",async(req,resp)=>{

    let Startdatum= req.body.Startdatum;
    let Einddatum= req.body.Einddatum;

    try{
        await client.connect();
        const KalenderData= client.db('login').collection('uitleningen');
        var uitleentermijn={
            //Geselecteerde_Apparaten: [results],
            //datum: "nu",
            sdatum:Startdatum,
            edatum: Einddatum
        }
        const results= await KalenderData.insertOne(uitleentermijn);
        resp.status(200).send({
            status:'ok',
            data:results
            
        });
    }catch(error){
        console.error(error);
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
app.post("/geschade_toestellen",async(req,resp)=>{
    try{
        await client.connect()
        let Toestellen_Db=client.db('login').collection('//');
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

app.post("/blacklist",async(req,resp)=>{
    try{
        await client.connect()
        let Blacklist_Db=client.db('login').collection('//');
        let Blacklist_Db_Data=await Toestellen_Db.find({}).toArray();

        resp.status(200).send({
            status:'ok',
            data:Blacklist_Db_Data
        });
    }catch(error){

    }finally{
        await client.close();
    }
});
app.get("/Toestel_inleveren",async(req,resp)=>{
try{
    await client.connect()
    //uitleningen data ophalen 
    let Uitleningen_Db=client.db('login').collection('uitleningen');
    let Uitleningen_Data= await Uitleningen_Db.find({}).toArray();

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
            message: "error"
        });
    } finally {
        await client.close();
    }
});

app.listen(3000);
console.log('app running');
