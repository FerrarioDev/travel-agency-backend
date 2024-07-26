import { navbar } from "../../components/navbar.js"
const btnCancel = document.getElementById('btnCancel')
const btnTravel = document.getElementById('btnTravel')
// modal para notificar que la reserva se realizo con exito y mejorar la ux
const successModal = document.getElementById('successModal');

// al cargar la pagina asigna los valores cargados para completar la reserva
document.addEventListener('DOMContentLoaded', async()=>{
    const summary = JSON.parse(localStorage.getItem('summary'))
    const header = document.getElementById('header')
    header.innerHTML = navbar()
    
    document.getElementById('city').value = summary.city.name
    document.getElementById('hotel').value = summary.hotel.name
    document.getElementById('cant').value = summary.cant
    document.getElementById('days').value = summary.days
    document.getElementById('total').value = summary.total
    console.log(summary.total)
})

// al pulsar el boton de cancelar redirecciona a la pagina principal y elimina la informacion del localStorage
btnCancel.addEventListener('click', () => {
    localStorage.removeItem('summary')
    localStorage.removeItem('selectedCity')
    window.location.href = '../../'
})

// genera la reserva y redirecciona a la pagina principal con un mensaje de exito
btnTravel.addEventListener('click', async () => {
    const summary = JSON.parse(localStorage.getItem('summary'));

    // Crea el objeto de datos de la reserva
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
        // envia la informacion al backend
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
            localStorage.removeItem('selectedCity');
            localStorage.removeItem('summary');
            successModal.classList.remove('hidden');
            setTimeout(() => {
                window.location.href = '../../';
            },2000);
        } else {
            const errorData = await response.json();
            console.error('Error creating reservation:', errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})

