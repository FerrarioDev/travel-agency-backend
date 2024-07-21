import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    basePrice: {type: Number, required: true},
    image: {type: String, required: true}
});

const City = mongoose.model('city', citySchema);
export default City;