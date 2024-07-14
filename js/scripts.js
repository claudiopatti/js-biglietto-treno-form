console.log('ciao console')

// const kilometers = "";

// console.log('chilometri da percorrere:' + kilometers);


// const age = "";

// console.log('Età:' + age);

// const priceTicket = (Math.round((kilometers * 0.21) * 100) / 100) ;
// console.log('prezzo del biglietto:' + priceTicket + '€');

// const priceTicketForMinor = (Math.round((kilometers * 0.168) * 100) / 100);
// console.log('prezzo del biglietto per minorenni:' + priceTicketForMinor + '€');

// // const priceTicketForOver = Math.round(kilometers * 0.126);
// // console.log('prezzo del biglietto per anziani:' + priceTicketForOver + '€');

// const priceTicketForOver = kilometers * (0.21 * 0.8);
// console.log('prezzo del biglietto per anziani:' + priceTicketForOver.toFixed(2) + '€');

// const ageMinor = 17;
// const ageOver = 65;

// // if (age <= ageMinor ) {
// //     document.getElementById('resultPrice').innerHTML = priceTicketForMinor + '€'
// //     console.log('prezzo scontato per minori:' + priceTicketForMinor + '€' );
// // }
// // else if (age >= ageOver) {
// //     document.getElementById('resultPrice').innerHTML = priceTicketForOver + '€'
// //     console.log('prezzo scontato per anziani:' + priceTicketForOver.toFixed(2) + '€' );
// // }

// // else {
// //     document.getElementById('resultPrice').innerHTML = priceTicket + '€'
// //     console.log('prezzo normale' + priceTicket + '€');
// // }

// // if (age >= ageOver) {
// //     console.log('prezzo scontato per anziani:' + priceTicketForOver + '€' )
// // }
// // else {
// //     console.log('prezzo normale' + priceTicket + '€')
// // }


// // document.getElementById('resultPrice').innerHTML = 

// // function myFuction(kilometers, age) {

// //     // console.log(kilometers.value, age.value);
// //     kilometers = (kilometers.value)
// //     age = (age.value)


// //     console.log('chilometri da percorrere:' + kilometers);

// //     console.log('Età:' + age);

// //     const priceTicket = (Math.round((kilometers * 0.21) * 100) / 100);
// //     console.log('prezzo del biglietto:' + priceTicket + '€');

// //     const priceTicketForMinor = (Math.round((kilometers * (0.21 * (1 - 0.2))) * 100) / 100);
// //     console.log('prezzo del biglietto per minorenni:' + priceTicketForMinor + '€');


// //     const priceTicketForOver = kilometers * (0.21 * (1 - 0.4));
// //     console.log('prezzo del biglietto per anziani:' + priceTicketForOver.toFixed(2) + '€');

// //     const ageMinor = 17;
// //     const ageOver = 65;


// //     if (age <= ageMinor) {

// //         document.getElementById('resultPrice').innerHTML = priceTicketForMinor + '€'
// //         console.log('prezzo scontato per minori:' + priceTicketForMinor + '€');
// //     }
// //     else if (age >= ageOver) {
// //         document.getElementById('resultPrice').innerHTML = priceTicketForOver.toFixed(2) + '€'
// //         console.log('prezzo scontato per anziani:' + priceTicketForOver.toFixed(2) + '€');
// //     }

// //     else {
// //         document.getElementById('resultPrice').innerHTML = priceTicket + '€'
// //         console.log('prezzo normale:' + priceTicket + '€');

// //     }


// // }

const infoForm = document.querySelector('form');

infoForm.addEventListener('submit',
    function (event) {

        event.preventDefault();


        const inputKilometers = document.getElementById('kilometers');
        console.log('inputKilometers.value', inputKilometers.value);

        const inputAge = document.getElementById('age');
        console.log('inputAge.value', inputAge.value);

        const inputName = document.getElementById('name');
        document.querySelector('.resultName').innerHTML = inputName.value;
        console.log('inputName.value', inputName.value);

        document.getElementById("numberSet").innerHTML = 'Carrozza' + "   " + Math.floor(Math.random() * 16);
        console.log('numberSet' , numberSet )

        document.getElementById("numberTicket").innerHTML = Math.floor(Math.random() * 1000001);



        // const priceTicket = (Math.round((inputKilometers.value * 0.21) * 100) / 100);
        // console.log('prezzo del biglietto:' + priceTicket + '€');

        // const priceTicketForMinor = (Math.round((inputKilometers.value * (0.21 * (1 - 0.2))) * 100) / 100);
        // console.log('prezzo del biglietto per minorenni:' + priceTicketForMinor + '€');


        // const priceTicketForOver = inputKilometers.value * (0.21 * (1 - 0.4));
        // console.log('prezzo del biglietto per anziani:' + priceTicketForOver.toFixed(2) + '€');



        if (inputAge.value <= 17) {
            const priceTicketForMinor = (Math.round((inputKilometers.value * (0.21 * (1 - 0.2))) * 100) / 100);
            document.querySelector('.resultPrice').innerHTML = "MAMMA E PAPA':" + priceTicketForMinor + '€'
            console.log('prezzo scontato per minori:' + priceTicketForMinor + '€');
        }
        else if (inputAge.value >= 65) {
            const priceTicketForOver = inputKilometers.value * (0.21 * (1 - 0.4));
            document.querySelector('.resultPrice').innerHTML = 'CO LI SORDI DELLA PENSIONE:' + priceTicketForOver.toFixed(2) + '€'
            console.log('prezzo scontato per anziani:' + priceTicketForOver.toFixed(2) + '€');
        }

        else {
            const priceTicket = (Math.round((inputKilometers.value * 0.21) * 100) / 100);
            document.querySelector('.resultPrice').innerHTML = 'COME TUTTI:' + priceTicket + '€'
            console.log('prezzo normale:' + priceTicket + '€');

        }


        if (inputAge.value <= 17) {
            document.querySelector('.resultTarif').innerHTML = 'DOVE STANNO I TUOI GENITORI'

        }
        else if (inputAge.value >= 65) {
            document.querySelector('.resultTarif').innerHTML = 'TE MANCA POCO, TI DIAMO UNA MANO CO NO SCONTICINO'

        }

        else {
            document.querySelector('.resultTarif').innerHTML = 'HAI LE FORZE E I SORDI; PAGAAAA'


        }


    }
)

