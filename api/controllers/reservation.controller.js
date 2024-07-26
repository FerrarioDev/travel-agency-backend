import Reservation from "../models/Reservation.model.js";
import City from "../models/city.model.js";
import Hotel from "../models/hotel.model.js";

// genera una nueva reservacion en la base de datos
export const createReservation = async (req, res) => {
    const {cityId, hotelId, userName, userSurname, userEmail, userPhone, numberOfPeople, numberOfNights, totalPrice} = req.body;
    try {
        // busca el hotel y la ciudad correspondientes
        const city = await City.findById(cityId);
        const hotel = await Hotel.findById(hotelId);

        // si no existe la ciudad o el hotel, devuelve un error 404
        if(!city || !hotel) return res.status(404).json({message: 'City or hotel not found'});
        
        // asigna los valores y crea la reservacion
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

        // guarda la reservacion
        await reservation.save();
        res.status(201).json(reservation);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
