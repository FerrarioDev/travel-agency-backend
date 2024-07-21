import Reservation from "../models/Reservation.model.js";
import City from "../models/city.model.js";
import Hotel from "../models/hotel.model.js";

export const createReservation = async (req, res) => {
    const {cityId, hotelId, userName, userSurname, userEmail, userPhone, numberOfPeople, numberOfNights, totalPrice} = req.body;
    try {
        const city = await City.findById(cityId);
        const hotel = await Hotel.findById(hotelId);
        if(!city || !hotel) return res.status(404).json({message: 'City or hotel not found'});
        
        const reservation = new Reservation({
            cityId,
            hotelId,
            userName,
            userSurname,
            userEmail,
            userPhone,
            numberOfPeople,
            numberOfNights,
            totalPrice
        });

        await reservation.save();
        res.status(201).json(reservation);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
