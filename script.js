/* Récupérer les id des dates d'arrivée, de départ et du bouton submit */

const arrival = document.querySelector('#arrival');
const departure = document.querySelector('#departure');
const pricePerNight = document.querySelector('#pricePerNight').innerHTML;
const submit = document.querySelector('#submit');

/* Récupérer les dates  */

const today = new Date().toISOString().split('T')[0];

let dateSelection = new Date(today);
dateSelection.setDate(dateSelection.getDate() + 1);
let tomorrow = dateSelection.toISOString().split('T')[0];

/* Aficher les dates d'arrivée et de départ*/

arrival.value = today;
arrival.min = today;

departure.value = tomorrow;
departure.min = tomorrow;

arrival.addEventListener('change', function (event) {
    dateSelection = new Date(event.target.value);
    dateSelection.setDate(dateSelection.getDate() + 1);
    tomorrow = dateSelection.toISOString().split('T')[0];
    departure.value = tomorrow;
    departure.min = tomorrow;
});

/* Afficher les informations */

function bookingTotal () {
    let date1 = new Date(arrival.value);
    let date2 = new Date(departure.value);

    let total = Math.abs(date2 - date1);
    total = Math.ceil(total / (1000 * 60 * 60 * 24));

    let nightsPrice = total * pricePerNight;

    if (total <= 1) {
        totalPrice.innerHTML = "Total : " + total + " nuit = " + nightsPrice + "€";
    }

    else totalPrice.innerHTML = "Total : " + total + " nuits = " + nightsPrice + "€";
}

submit.addEventListener('click', function() {
    bookingTotal();
});