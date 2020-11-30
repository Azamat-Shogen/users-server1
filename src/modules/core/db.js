import mongoose from "mongoose";


export default function dbConnect(){
    mongoose.connect("mongodb://localhost/express-demo2",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function (){
        console.log("Connected to the Database");
    });
}