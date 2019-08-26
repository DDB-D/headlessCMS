
var content_stage_buzzword = new ShuffleText(document.querySelector('#buzzwords_changeType_1'));
var content_stage_buzzword_2 = new ShuffleText(document.querySelector('#buzzwords_changeType_2'));
var content_stage_buzzword_3 = new ShuffleText(document.querySelector('#buzzwords_changeType_3'));
var content_stage_buzzword_4 = new ShuffleText(document.querySelector('#buzzwords_changeType_4'));

var buzzwords_1 = ["concept", "vision"];
var buzzwords_2 = ["design", "art-direction"];
var buzzwords_3 = ["motion", "prototype"];
var buzzwords_4 = ["ui ux", "development"];

var randomBuzzword;
var randomBuzzword_2;
var randomBuzzword_3;
var randomBuzzword_4;

var oldBuzzword;
var oldBuzzword_2;
var oldBuzzword_3;
var oldBuzzword_4;

function buzzword(buzzword, content_stage_buzzword){
  console.log(buzzword);
  content_stage_buzzword.setText(buzzword);
  content_stage_buzzword.start();
}

function getRandom(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

setInterval(function(){
  randomBuzzword = getRandom(buzzwords_1);
  randomBuzzword_2 = getRandom(buzzwords_2);
  randomBuzzword_3 = getRandom(buzzwords_3);
  randomBuzzword_4 = getRandom(buzzwords_4);

  checkBuzzword(randomBuzzword, oldBuzzword, content_stage_buzzword);
  checkBuzzword(randomBuzzword_2, oldBuzzword_2, content_stage_buzzword_2);
  checkBuzzword(randomBuzzword_3, oldBuzzword_3, content_stage_buzzword_3);
  checkBuzzword(randomBuzzword_4, oldBuzzword_4, content_stage_buzzword_4);

  oldBuzzword = randomBuzzword;
  oldBuzzword_2 = randomBuzzword_2;
  oldBuzzword_3 = randomBuzzword_3;
  oldBuzzword_4 = randomBuzzword_4;

}, 4000);

// check if buzzword doubles
function checkBuzzword(randomBuzzword, oldBuzzword, buzzwordTarget){
  if (randomBuzzword != oldBuzzword){
    buzzword(randomBuzzword, buzzwordTarget);
  }
}
