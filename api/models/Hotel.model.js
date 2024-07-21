import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    cityId: {type: mongoose.Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    pricePerNight: {type: Number, required: true}
});

const Hotel = mongoose.model('hotel', hotelSchema);

export default Hotel;