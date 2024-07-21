import { navbar } from "../../components/navbar.js"
const btnCancel = document.getElementById('btnCancel')
const btnTravel = document.getElementById('btnTravel')

document.addEventListener('DOMContentLoaded', async()=>{
    const summary = JSON.parse(localStorage.getItem('summary'))
    const header = document.getElementById('header')
    header.innerHTML = navbar()

    //Este codigo puede variar dependiendo de como se maneje la informacion del localStorage
    document.getElementById('city').value = summary.city.name
    document.getElementById('hotel').value = summary.hotel.name
    document.getElementById('cant').value = summary.cant
    document.getElementById('days').value = summary.days
    document.getElementById('total').value = summary.total
    console.log(summary.total)
})

btnCancel.addEventListener('click', () => {
    localStorage.removeItem('summary')
    window.location.href = '../../'
})

btnTravel.addEventListener('click', async () => {
    const summary = JSON.parse(localStorage.getItem('summary'));

    const reservationData = {
        cityId: summary.city._id,
        hotelId: summary.hotel._id,
        userName: document.getElementById('name').value,
        userSurname: document.getElementById('lastName').value,
        userEmail: document.getElementById('email').value,
        userPhone: document.getElementById('tel').value,
        numberOfPeople: parseInt(summary.cant),
        numberOfNights: parseInt(summary.days),
        totalPrice: parseFloat(summary.total)
    };

    try {
        const response = await fetch('http://localhost:3000/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        });

        if (response.ok) {
            const reservation = await response.json();
            console.log('Reservation created:', reservation);
            localStorage.removeItem('summary');
            window.location.href = '../../';
        } else {
            const errorData = await response.json();
            console.error('Error creating reservation:', errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})
