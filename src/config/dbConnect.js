import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Souza:8k4qXW3q9dqrhRAj@cluster0.eoed6nf.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;