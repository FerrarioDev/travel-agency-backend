import City from '../models/city.model.js';

// devuelve todas las ciudades de la base de datos
export const getCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// devuelve la ciudad con el id correspondiente
export const getCityById = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if(!city) return res.status(404).json({message: 'City not found'});
        res.json(city);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
