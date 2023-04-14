import mongoose from "mongoose"
import dotenv from 'dotenv'
const connection = async (username, password) => {

    const URL = process.env.DB_URL;

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    }catch(error) {
        console.log('Error while connecting with the database', error);
    }
}

export default connection;