let calculate = document.getElementById("calculate");

calculate.addEventListener('click', start);

//zodiac
let month; //month
let x; //month1
let day;
let year; 
let zodiacResult = 0; 
let zsign = 0;
 
function start(){
    let getName = getInput();
    birthDate();
    birthMonth();
    listZodiac();
    listZodiac();
    Output(getName, zsign);
}

//haal waarde uit  name veld
function getInput(){
    let name = document.getElementById("name");
    let getName = name.value;
   // Output(getName);
    return getName;
}

function birthDate(){
    year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    x = Number(month);
    day = Number(day);
    year = Number(year);
    console.log(day, x, year); // debug
}

function birthMonth() {
    switch (x) {
        case 1:
            month = 0;
            break;
        case 2:
            month = 31;
            break;
        case 3:
            month = 60;
            break;
        case 4:
            month = 91;
            break;
        case 5:
            month = 121;
            break; 
        case 6:
            month = 152;
            break;
        case 7:
            month = 182;
            break;
        case 8:
            month = 213;
            break;
        case 9:
            month = 244;
            break;
        case 10: 
            month = 274;
            break;
        case 11:
            month = 305;
            break;
        case  12:
            month = 335;
            break;
        default:
            zsign = "Fix Month and or Day"  
            break;  
    }
    zodiacResult = month + day;
    console.log(zodiacResult);
 } 

let img = document.getElementById("zodiacimg");
let description = document.getElementById("description");

 function listZodiac(){
    switch(true){
        case (zodiacResult > 80 && zodiacResult < 112):
            zsign = "Aries";
            description.innerHTML = "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!";
            img.src = "images/aries.png";
            break;
        case (zodiacResult > 111 && zodiacResult < 143):
            zsign = "Taurus";
            img.src = "images/taurus.png";
            description.innerHTML = "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
            break;
        case (zodiacResult > 142 && zodiacResult < 174):
            zsign = "Gemini";
            img.src = "images/gemini.png";
            description.innerHTML = "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!";
            break; 
        case (zodiacResult > 173 && zodiacResult < 205):
            zsign = "Cancer";
            img.src = "images/cancer.png";
            description.innerHTML = "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancers ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!";
            break; 
        case (zodiacResult > 204 && zodiacResult < 236):
            zsign = "Leo";
            img.src = "images/leo.png";
            description.innerHTML = "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.";
            break; 
        case (zodiacResult > 235 && zodiacResult < 267):
            zsign = "Virgo";
            img.src = "images/virgo.png";
            description.innerHTML = "You know the expression, if you want something done, give it to a busy person? Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isnt afraid to improve skills through diligent and consistent practice.";
            break; 
        case (zodiacResult > 266 && zodiacResult < 297):
            zsign = "Libra";
            img.src = "images/libra.png";
            description.innerHTML = "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.";
            break;
        case (zodiacResult > 296 && zodiacResult < 328):
            zsign = "Scorpio";
            img.src = "images/scorpio.png";
            description.innerHTML = "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.";
            break; 
        case (zodiacResult > 327 && zodiacResult < 357):
            zsign = "Sagittarius";
            img.src = "images/sagittarius.png";
            description.innerHTML = "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";
            break; 
        case (zodiacResult > 356 && zodiacResult < 367):
            zsign = "Capricorn";
            img.src = "images/capricorn.png";
            description.innerHTML = "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
            break; 
        case (zodiacResult > 0 && zodiacResult < 20):
            zsign = "Capricorn";
            img.src = "images/capricorn.png";
            description.innerHTML = "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
            break;
        case (zodiacResult > 19 && zodiacResult < 51):
            zsign = "Aquarius"; 
            img.src = "images/aquarius.png";
            description.innerHTML = "Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.";
            break; 
        case (zodiacResult > 50 && zodiacResult <81):
            zsign = "Pisces";
            img.src = "images/pisces.png";
            description.innerHTML = "If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and thats because it   s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.";
            break; 
        default: 
            document.getElementById("day").value = "See if month and day are real";
            break;
    }
 }

 //resultaat

let result = document.getElementById("result");


 
function Output(getName, zsign){
    let resultZodiac =  getName + " your zodiac sign is " + zsign;
    result.innerHTML =  resultZodiac;

}

