//Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
//BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)
const app = new Vue ({
    el: '#app',
    data: {
        title: 'Introducing the world of Vue',
        message: 'here you can find an image from Js',
        imgMurray: 'https://www.fillmurray.com/200/300',
    },
    methods: {
        randomNumber: function () {
            return Math.floor(Math.random() * (600 - 200 + 1 )) + 200;
        },
        changeImage: function () {
            this.imgMurray = 'https://www.fillmurray.com/' + this.randomNumber() + '/' + this.randomNumber();
        },
    }

});