const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7utjicv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const BDcollection = client.db('triprexDB').collection('touristBD');
        const countriesCollection = client.db('triprexDB').collection('countries');

        // country categories data
        app.get('/countriesdata', async (req, res) => {
            const cursor = countriesCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })


        // Get Tourists Spot All Data
        app.get('/touristsspot', async (req, res) => {
            const cursor = BDcollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('TripRex server is running')
});

app.listen(port, () => {
    console.log(`TripRex is running port on ${port}`)
})