import mongoose from "mongoose"

const connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@crud-app.demzffi.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    }catch(error) {
        console.log('Error while connecting with the database', error);
    }
}

export default connection;