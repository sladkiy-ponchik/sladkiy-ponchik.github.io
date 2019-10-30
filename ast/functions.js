'use strict';

let picInterval = null;  // интервал выпадения картинок
let srcNumbers = fillSrcNumbers();


// Возвращает случайное целое число до указанного максимума
const random = (max) => ~~(max * Math.random());


// Добавляет картинку в дождик из картинок
function addPic() {
	let pic = createDiv();
    // Удаляет элемент через 10 секунд
    setTimeout(()=>{
        if (pic.parentNode == VAPP)
            VAPP.removeChild(pic);
    }, 25000);
}


// Создаёт и возвращает готовую div-обёртку с фразой и изображением
function createDiv() {
    let Putin = Math.random() > 0.98;
	let div = document.createElement("div");
        div.classList.add("kitty-img");
        div.style.left = Putin ? "333px" : getLeft() + "px";
        div.style.animationDuration = Putin ? "25s" : (15 + random(10)) + "s";
        div.appendChild(createPhrase(Putin));
        div.appendChild(createImage(div, Putin));
	return div;
}


// Создаёт и возвращает случайное изображение
function createImage(div, Putin) {
	let picture = document.createElement("img");
        picture.onload = () => { VAPP.appendChild(div); };
        picture.src = Putin ? "img/kitty128.png" : getSrc();
	return picture;
}


function getSrc() {
    if (!srcNumbers.length)
        srcNumbers = fillSrcNumbers();
    let src = srcNumbers.splice(random(srcNumbers.length), 1)[0];
    return "img/kitty" + src + ".png";
}


// Создаёт и возвращает h3-фразу из глобального массива frases
function createPhrase(Putin) {
	let phrase = document.createElement("h3");
	phrase.classList.add("kitty-frase");

	if (Putin) {
		phrase.textContent = putinPhrase;
		phrase.style.color = "black";
		phrase.classList.add("putin");
	} else {
        let colors = random(255) + "," + random(255) + "," + random(255);
		phrase.textContent = createTextContent();
        phrase.style.color = "rgb("+colors+")";
        phrase.style.borderColor = "rgba("+colors+",.5)";
	}

	return phrase;
}


function createTextContent() {
    if (Math.random() > 0.25) {
        return generatePhrase();
    } else {
        return constantPhrases[random(100)];
    }
}


// DEPRECATED
function deletePics() {
	let pics = document.getElementsByClassName("kitty-img");
    let len = pics.length - 1;
    for (let i = len; i >= 0; i--) {
        if (pics[i] && pics[i].parentNode == VAPP)
            VAPP.removeChild(pics[i]);
    }
}


function fillSrcNumbers() {
    let srcNumbers = [];
    for (let i = 0; i < 128; i++)
        srcNumbers.push(i);
    return srcNumbers;
}


function generatePhrase() {
    let phrase = "";
    let sex = random(2);
    for (let i = 0; i < 4; i++) {
        if (i === 1 || i === 2) {
            phrase += genericPhrases[i][sex][random(15)];
        } else {
            phrase += genericPhrases[i][random(15)];
        }
        if (i < 3)
            phrase += " ";
    }

    return phrase;
}


// Возвращает левый край активного окна
function getLeft() {
	let w = window,
    	d = document,
    	e = d.documentElement,
    	g = d.getElementsByTagName('body')[0],
    	x = w.innerWidth || e.clientWidth || g.clientWidth;
    return random(x - 256);
}


// Если kittyInterval существует - уничтожает его и всех созданных kitty; иначе -
// создаёт интервал на создание котят. kittyInterval - глобальная переменная
function kittyRain() {
	if (picInterval) {
		clearInterval(picInterval);
		picInterval = null;
        deletePics();
	} else {
	   picInterval = setInterval(addPic, 1500);
    }
}


// Хэндлер нажатия кнопки-сердечка, переключает класс active, запускает kittyRain
function loveYou() {
	let button = document.getElementById("love-you");
	if (button) {
		button.classList.toggle("active");
	}

	kittyRain();
}
