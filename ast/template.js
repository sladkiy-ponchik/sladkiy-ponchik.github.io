'use strict';

// Template кнопки-сердечка
const appTemplate = `
<div id="vApp">
	<button id="love-you" @click="loveYou()"><img src="img/loveyou.png"/></button>
</div>`;

// Изменение размера массива frases необходимо учесть в createKittyFrase (functions.js)
const constantPhrases = [
	"Ты лучшая, да, именно ты", "Я тебя люблю", "м я ф", "м и у", "m e o w",
	"r r a h !", "мы котёночки", "с днём лазденя", "др-др-др-др-др!", "хаппи ханука",
	"с тнём ластеня", "поздравляю с днём рождения!", "праздравляю!", "happy birthday!",
	"будь собой, лапа", "ты самая лучшая", "мяфка", "миука", "дождик из котиков",
	"ти мой китикет", "с новой красотулей, с тобой!", "здаровя типе", "люби котикоф",
	"а у миня лапульки", "ти исё маненькая", "в чём сила брат? в котиках",
	"ти миня любис?", "счястя тибе", "ти мой котёнок", "ти самая класивая",
	"без тебя нас тютю", "ти моя жизнь", "в жизни важно тока ти, запомни",
	"я тибя съем", "т ь м о к", "к у с ь", "кто тибя любит? я", "к а т и к",
	"я по тибе скутяю", "мне с тобой холосо", "ты - сокловище", "ты - золото",
	"ты мой мир", "ти самая вкусненькая", "тебя все любят, особенно я", "с днюхой!",
	"с др!", "happy birthday to you", "you're the best", "ты - катятотька",
	"к а т и т е к", "я есть катик", "я люблю каждый твой шрамик",
	"с днюшкой, конфетка!", "с др, тортик мой", "ти моя обезьянка", "печенюшка ти :)",
	";-)", "gg love", "никто кломе тибя", "я люблю молочко и тебя", "ти моя самая ням-ням",
	"ты мой лучший друг", "ты самый близкий мне человек", "ты единственная", "ты уникальная",
	"ты лучшая", "ты лучший человек в мире", "я тибя кусь", "я тибя тьмок", "ммммммм",
	"ммм...ты просто...ммм", "ти - клубнитька на толтике", "с днём валенья",
	"праздравляю с днём валенья", "с днём тебя!", "с годовщиной рождения",
	"с вечно-летием!", "сокровище!", "счастливого дня рождения", "вкусного тебе дня рождения",
	"я тибя люблю сильнее!", "ти мой гномик", "тьмоки, именинница!", "именинница", "с др :)",
	"картофелина, с днюхой", "весь район обсуждает др", "мая мама тибя любит", "хм, поздравляю",
	"каво здесь паздравить?!", "хава нагила", "мы будем pirate kings!", "с днюхой, держись там..",
	"клутых подалков!", "ти моя буби", "мяфка, ты прекрасна", "ти лутсая мяфка в мире",
	"я котик как и ты :)", "мимими",
];

const genericPhrases = [
	[ // пожелание
		"Поздравляю,", "С др-др-др,", "Щастья те", "С днюхой", "Ты идеал,",
		"Любви тибе", "Бабла те,", "Люблю тебя,", "Не болей", "Нандакуку",
		"Здоровья вам,", "Конфет те,", "Радости,", "Веселись,", "Отдыхай,",
	],
	[ // прилагательное, девочка\мальчик
		[
			"пушистая", "нежная", "милая", "сладкая", "секси",
			"ласковая", "игривая", "красивая", "умная", "обаятельная",
			"интересная", "мягкая", "маленькая", "волшебная", "загадочная",
		],
		[
			"глупый", "смешной", "сладкий", "вкусный", "нежный",
			"маленький", "халосый", "мягкий", "няшный", "бубушный",
			"смышлёный", "весёлый", "сексуальный", "обаятельный", "добрый",
		],
	],
	[ // cуществительное, девочка\мальчик
		[
			"булочка", "Викуля", "Влада", "малышка", "кися",
			"девочка", "красотка", "бубука", "Вика", "Владлена",
			"Викуличка", "Викочка", "Викуся", "Виктория", "госпожа",
		],
		[
			"Влад", "Виктор", "малыш", "бублик", "пончик",
			"господин", "пончик с корицей", "котик", "чел", "тортик",
			"бубук", "карфаген", "гей", "гермафродитик", "красавчик",
		],
	],
	["!","!",".",".","","","","-_-",":)","%-)","^^","=>","...","!!!",")))"],
];

const putinPhrase =
	"Поздравляю вас с днём рождения, Виктория. "
	+ "Желаю вам счастья, процветания в личной жизни и успехов в учёбе. "
	+ "Вы стали старше, Вика, я горжусь вами.";
