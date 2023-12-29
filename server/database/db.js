import mongoose from "mongoose";


// import dotenv from "dotenv";
// dotenv.config();
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// console.log(DB_USERNAME, DB_PASSWORD);


const connection = async () => {
    // const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@ponderpages.0kiaje7.mongodb.net/your-database-name?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://admin:admin@ponderpages.0kiaje7.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connection;
