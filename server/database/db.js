import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-1evslzs-shard-00-00.rjr2sdm.mongodb.net:27017,ac-1evslzs-shard-00-01.rjr2sdm.mongodb.net:27017,ac-1evslzs-shard-00-02.rjr2sdm.mongodb.net:27017/?ssl=true&replicaSet=atlas-13533f-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        let response = await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("Database Connected Successfully")

    } catch (error) {
        console.log("Error while connecting with the database ", error.message);
    }
}

export default Connection;