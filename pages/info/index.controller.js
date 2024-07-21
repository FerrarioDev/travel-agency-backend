import { navbar } from '../../components/navbar.js'
const header = document.getElementById('header')
header.innerHTML = navbar()

const btn = document.getElementById('btnTravel')
const totalP = document.getElementById('total')
const hotelSelect = document.getElementById('hotel')
const inputCant = document.getElementById('cant')
const inputDays = document.getElementById('days')
const selectedCity = JSON.parse(localStorage.getItem('selectedCity'))
let city = []
let hotels = {}
let selectedHotel = []
let totalPrice
const getTotal = () => {
    const cant = inputCant.value 
    const days = inputDays.value 
    selectedHotel = hotels.find(hotel => hotel.name === hotelSelect.value)
    totalPrice = cant * days * selectedHotel.pricePerNight + city.basePrice
    totalP.textContent = `$${totalPrice}`
}

const getHotelsByCity = async (cityId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/hotels/${cityId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch hotels');
        }
        const hotels = await response.json();
        return hotels;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        return null;
    }
}
btn.addEventListener('click', () => {
    const data = {
        city: city,
        hotel: selectedHotel,
        cant: inputCant.value,
        days: inputDays.value,
        total: totalPrice
    }
    console.log(data)
    localStorage.setItem('summary', JSON.stringify(data))
    window.location.href = '../summary/'
})

document.addEventListener('DOMContentLoaded', async()=>{
    const response = await fetch('http://localhost:3000/api/cities')
    console.log('Fetching data from server...')
    const data = await response.json()
    console.log('Data fetched successfully:', data)    
    city = data.find(city => city._id === selectedCity) //Este codigo puede variar dependiendo de como se obtenga la ciudad seleccionada
    totalP.textContent = `$${city.basePrice}`
    console.log(city.basePrice)
    document.getElementById('title').textContent = `Calcula tu viaje a ${city.name}`
    document.getElementById('img').src = city.image
    document.getElementById('desc').textContent = city.description

    hotels = await getHotelsByCity(city._id);
    if (hotels) {
        let hotelOptions = '';
        hotels.forEach(hotel => {
            hotelOptions += `<option value="${hotel.name}">${hotel.name}</option>`;
        });
        hotelSelect.innerHTML = hotelOptions;
    }
    
})

inputCant.addEventListener('input', () => {
    console.log(inputCant.value)
    getTotal()
})

inputDays.addEventListener('input', () => {
    console.log(inputDays.value)
    getTotal()
})

hotelSelect.addEventListener('change', () => {
    console.log(inputDays.value)
    getTotal()
})