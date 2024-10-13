const heartNum = 0;
const messageNum = 0;

// Array of messages
const messages = [
    "Te amo mi vida ❤️",
    "Sos la mejor persona que conozco ❤️",
    "Tene un hermoso dia mi amor ❤️",
    "Sos la pincesa mas hermosa del mundo ❤️",
    "Vos podes con todo mi vida❤️",
    "Sos la mejor novia del mundo ❤️",
    "Sos lo mejor que me ha pasado ❤️",
    "Te amo con todo mi ser ❤️",
    "Sos la mejor compañera de vida ❤️",
    "Sos la mujer mas hermosa del mundo ❤️",
    "Sos la mejor persona del mundo ❤️",
    "Te amo infinitomil ❤️",
    "I love you to the moon and back ❤️",
    "Sos lo mejor que me ha pasado ❤️",
    "Quiero estar con vos para siempre ❤️",
    "Sos mi reina ❤️",
    "Quiero pasar el resto de mi vida con vos ❤️",
    "No puedo esperar a que seas mi esposa ❤️",
    "estoy enamorado de vos ❤️",
    "Estoy orgulloso de vos siempre ❤️",
    "Amo tu sonrisa ❤️",
    "Amo tu risa ❤️",
    "Amo tu voz ❤️",
    "Amo tu pelo ❤️",
    "Amo tus ojos ❤️",
    "Amo tu sonrisa ❤️",
    "Amo tu forma de ser ❤️",
    "Amo tu forma de tratarme ❤️",
    "Amo tu forma de amarme ❤️",
    "Amo tu forma de cuidarme ❤️",
    "Te amo enterita ❤️",
    "Te amo con todo mi ser ❤️",
    "Amo tus memes ❤️",
    "Amo tus chistes ❤️",
    "Amo tu cuerpo ❤️",
    "Amo tus abrazos ❤️",
    "Amo tus besos ❤️",
    "Amo tus caricias ❤️",
    "Amo tus palabras ❤️",
    "Amo cada momento que paso con vos ❤️",
    "Amo cada segundo que paso con vos ❤️",
    "Amo cada minuto que paso con vos ❤️",
    "Amo cada hora que paso con vos ❤️",
    "Amo cada dia que paso con vos ❤️",
    "I love you Honey ❤️",
    "I love you with all my heart ❤️",
    "I love you with all my soul ❤️",
    "I love you with all my being ❤️",
    "I love you with all my strength ❤️",
    "I love you with all my mind ❤️",
    "I love you with all my spirit ❤️",
    "Por vos moveria montañas ❤️",
    "Por vos cruzaria mares ❤️",
    "Por vos iria al fin del mundo ❤️",
    "Por vos iria al fin del universo ❤️",
    "Por vos iria al fin del espacio ❤️",
    "Por vos iria al fin del tiempo ❤️",
    "Por vos iria al fin de la eternidad ❤️",
    "Con vos espero llegar al fin de los tiempos ❤️",
    "Con vos espero llegar al fin de la eternidad ❤️",
    "Quiero estar con vos por siempre ❤️",
    "Quiero estar con vos por toda la eternidad ❤️",
    "Quiero que vos estes conmigo por el resto de mi vida ❤️",
    "Quiero que vos estes conmigo por el resto de la eternidad ❤️",
    "Amo tu carita hermosa ❤️",
    "Amo tu sonrisa hermosa ❤️",
    "Sos mi niña piciosa ❤️",
    "Sos mi pincesa minion piciosa ❤️",
    "Sos mi vida ❤️",
    "Sos mi amor ❤️",
    "Sos mi todo ❤️",
    "Sos lo mejor del mundo ❤️",
    "Sos la mujer mas hermosa del mundo ❤️",
    "Sos la mujer que siempre he querido ❤️",
    "Sos la mujer que siempre he soñado ❤️",
    "Siempre quiero estar con vos ❤️",
    "Siempre quiero estar a tu lado ❤️ o encima jejejeje ❤️",
    "Vos podes con todo mi amor ❤️",
    "Mi Doctoda ❤️",
    "La mejor doctora del mundo ❤️",
];

// Function to display a random message
function displayRandomMessage() {
    console.log('Button clicked'); // Check if the function is called

    // Get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Get the random message
    const randomlove = messages[randomIndex];
    
    // Find the HTML element by ID and set its text content to the random message
    const messageElement = document.getElementById('message'); 
    const NewLove = randomlove +" \n "+ messageElement.textContent;
    messageElement.textContent = NewLove;
}

function addHeart(){
    heartNum + 1;
    const heartCount = document.getElementById('hearts'); 
    const loveCount = "❤️" + heartCount.textContent;
    heartCount.textContent = loveCount;
    if(heartNum < 10){
        loveCount = heartCount.textContent + " \n ";
    }
}
