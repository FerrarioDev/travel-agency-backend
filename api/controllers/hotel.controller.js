import Hotel from "../models/hotel.model.js";

// devuelve todos los hoteles de la ciudad seleccionada
export const getHotelsByCity = async (req, res) => {
    try {
        const hotels = await Hotel.find({cityId: req.params.id});
        res.json(hotels);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}