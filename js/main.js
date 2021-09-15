var r = document.querySelector(':root');

// const sliderFontSizeGlobal = document.querySelector("#slider-font-size-global");
// const sliderFontSizeContent = document.querySelector("#slider-font-size-content");

const contentTxt = document.querySelector(".content-page");
const bodyDOM = document.querySelector("body");

// sliderFontSizeGlobal.addEventListener('input', e =>{
// 	bodyDOM.style.fontSize = e.target.value + "%";
// });
// sliderFontSizeContent.addEventListener('input', e =>{
// 	contentTxt.style.fontSize = e.target.value + "%";
// });


/////////////////////////
//variable font parametre
/////////////////////////
function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

const containerTxt = document.createElement("p");
const contentTxtInput = document.querySelector("#txt-content");

//input fiel txt
var txt = contentTxtInput.value;
const article = document.querySelector(".variable-font");
contentTxtInput.addEventListener('input', e =>{
	txt = mapRange(e.target.value, 0, 10, 10, 0);
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//alignement
const FlexAlignInput = document.querySelector("#align-select");
FlexAlignInput.addEventListener('input', e =>{
	document.querySelector(".variable-font").style.justifyContent =  e.target.value;
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//vitesse d'animation
const sliderVitesseAnimation = document.querySelector("#slider-vitesse-animation");
var VitesseAnim = sliderVitesseAnimation.value;
sliderVitesseAnimation.addEventListener('input', e =>{
	VitesseAnim = e.target.value;
	console.log(delayAnim);
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//delay
const sliderDelayAnimation = document.querySelector("#slider-delay-animation");
var delayAnim= sliderDelayAnimation.value;
sliderDelayAnimation.addEventListener('input', e =>{
	delayAnim = e.target.value;
	console.log(delayAnim);
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//size
const sliderFontSizeVariable = document.querySelector("#slider-font-size-variable");
var variableFontSize = sliderFontSizeVariable.value;
sliderFontSizeVariable.addEventListener('input', e =>{
	variableFontSize = e.target.value;
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//letter spacing
const sliderFontMarginVariable = document.querySelector("#slider-font-margin-variable");
var marginLetter = sliderFontMarginVariable.value;
sliderFontMarginVariable.addEventListener('input', e =>{
	marginLetter = e.target.value;
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//interlignage
const sliderFontinterligneVariable = document.querySelector("#slider-font-interlignage-variable");
var interlignage = sliderFontinterligneVariable.value;
sliderFontinterligneVariable.addEventListener('input', e =>{
	interlignage = e.target.value;
	loadTxtInput(fontFamilly,variableFontSize, marginLetter, interlignage, delayAnim);
});

//font familly
var allFamillyButton = document.querySelectorAll(".choose-font p");
fontFamilly = "Anchos";

allFamillyButton.forEach(function(el){
	el.addEventListener('click', e =>{
		fontFamilly = e.target.innerHTML;
		loadTxtInput(fontFamilly, variableFontSize, marginLetter, interlignage, delayAnim);
	});
});

const btnWord = document.querySelector("#button-letter");
var onWord = true;
btnWord.innerHTML = onWord;
btnWord.addEventListener("click", () => {
	onWord = !onWord;
	btnWord.innerHTML = onWord;
	loadTxtInput(fontFamilly, variableFontSize, marginLetter, interlignage, delayAnim);
});

//generate all letter
variableFontSize = sliderFontSizeVariable.value;
var delay;
function loadTxtInput(font, VariableSize, margin, interlignage, delayAnim){
	
	while (article.firstChild) {
		article.removeChild(article.lastChild);
	}

	var mots = txt.split(" ");
	var index = 0;

	for(var m = 0; m < mots.length; m++){
		var heightLetter;
		var motContainer = document.createElement("div");
		motContainer.classList.add("mot");
		motContainer.classList.add("mot" + m);
		article.append(motContainer);
		// console.log("mot : " + mots[m],"// nombre de lettre : " + mots[m].length);
		
		for(var l = 0; l < mots[m].length; l++){
			var letter = document.createElement("span");
			letter.innerHTML = txt[index];
			letter.classList.add("letter");
			motContainer.append(letter);
			// console.log("index : "+ index, "lettre :" +txt[index]);
	
			delay = (index * delayAnim) / txt.length;
			
			if(onWord){
				letter.style.animationName = "variation";
				letter.style.animationDuration = VitesseAnim + "s";
				letter.style.animationTimingFunction = "cubic-bezier(0, 0, 0.58, 1.0)";
				letter.style.animationIterationCount = "infinite";
				letter.style.animationDelay = delay +"s";
				letter.style.fontSize = VariableSize + "em";
				letter.style.letterSpacing = margin + "px";
				letter.style.marginBottom = interlignage + "px";
				letter.style.fontFamily = font;
			}
			// letter.setAttribute('contenteditable', "true");
			index++;
			heightLetter = letter.offsetHeight;
		}
		var space = document.createElement("span");
		space.innerHTML = "&nbsp;&nbsp;";
		// motContainer.style.height = heightLetter + "px";
		space.style.height = heightLetter + "px";
		motContainer.append(space);
	
		if(!onWord){
			motContainer.style.animationName = "variation";
			motContainer.style.animationDuration = VitesseAnim + "s";
			motContainer.style.animationTimingFunction = "cubic-bezier(0, 0, 0.58, 1.0)";
			motContainer.style.animationIterationCount = "infinite";
			motContainer.style.animationDelay = delay + "s";
			motContainer.style.fontSize = VariableSize + "em";
			motContainer.style.letterSpacing = margin + "px";
			motContainer.style.marginBottom = interlignage + "px";
			motContainer.style.fontFamily = font;
		}

		index++;
	}
}
loadTxtInput(fontFamilly, variableFontSize, marginLetter,interlignage, delayAnim);



//paragraphe parametre
const paraContent = document.querySelector("#para-content");
// const sliderLineHeight = document.querySelector("#slider-line-height-content")
// paraContent.style.lineHeight = sliderLineHeight.value + "em";

// document.querySelector("#slider-line-height-content").addEventListener('input', e =>{
// 	document.querySelector("#para-content").style.lineHeight =  e.target.value +"em";
// });

const animStart = document.querySelector("#anim-start");
animStart.value = getComputedStyle(r).getPropertyValue('--Anim-start');
const animEnd = document.querySelector("#anim-end");
animEnd.value = getComputedStyle(r).getPropertyValue('--Anim-end');

animStart.addEventListener('input', e => {
	console.log(e.target.value);
	r.style.setProperty('--Anim-start', e.target.value);
});

animEnd.addEventListener('input', e => {
	console.log(e.target.value);
	r.style.setProperty('--Anim-end', e.target.value);
});
