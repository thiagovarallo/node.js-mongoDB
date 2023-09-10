import mongoose from "mongoose";

async function connectData() {
    mongoose.connect("mongodb+srv://admin:varallo@cluster0.xrtwswq.mongodb.net/?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectData;