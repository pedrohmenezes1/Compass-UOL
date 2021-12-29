import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const conectarMongo = async () => {
    await mongoose.connect("mongodb://localhost/compass");
};
export default conectarMongo;