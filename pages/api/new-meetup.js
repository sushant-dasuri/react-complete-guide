import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://sushant1184:ArOy330qbGLQueMn@cluster0.avdfjlp.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = cleint.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup Inserted'});
    }
}

export default handler;