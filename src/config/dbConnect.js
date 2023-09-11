import mongoose from "mongoose";

async function connectData() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default connectData;