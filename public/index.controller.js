import { card } from './components/card.js'
import { navbar } from './components/navbar.js'
const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')
header.innerHTML = navbar()
document.addEventListener('DOMContentLoaded', async()=>{
    //Deberia ser un array de objetos con la informacion de las ciudades
    const response = await fetch('http://localhost:3000/api/cities')
    const data = await response.json()
    cardContainer.innerHTML = ''

    data.forEach((place) => {
        cardContainer.innerHTML += card(place.name, place.description, place.basePrice, place._id, place.image)
    })

    const btnCity = document.getElementsByName('btnCity')
    Array.from(btnCity).forEach(button => {
        button.addEventListener('click', (e) => {
            const city = e.target.dataset.city
            localStorage.setItem('selectedCity', JSON.stringify(city))
            window.location.href = './pages/info'
        })
    })
})