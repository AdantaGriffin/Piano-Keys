// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event){
  event.target.style.backgroundColor = 'blue'; //1
}
const keyReturn = function(event){
  event.target.style.backgroundColor = ''; //2
}

// Write a named function with event handler properties
const events = function(note){ //3
  note.onmousedown = keyPlay; //4
  note.onmouseup = keyReturn; //5
}

// Write a loop that runs the array elements through the function
notes.forEach(events);//6
//7 at this point code should work. when piano key is pressed it changes color, when released it return to original color.

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){ //8
  nextTwo.hidden = false; //9
  nextOne.hidden = true; //9
  document.getElementById('letter-note-five').innerHTML = 'D'; //10
  document.getElementById('letter-note-six').innerHTML = 'C'; //10
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){ //11
  nextThree.hidden = false; //12
  nextTwo.hidden = true; //12
  document.getElementById('word-five').innerHTML = 'DEAR'; //13
  document.getElementById('word-six').innerHTML = 'FRI-'; //13
  document.getElementById('letter-note-three').innerHTML = 'G'; //15
  document.getElementById('letter-note-four').innerHTML = 'E'; //15
  document.getElementById('letter-note-five').innerHTML = 'C'; //15
  document.getElementById('letter-note-six').innerHTML = 'B'; //15
  lastLyric.style.display = 'inline-block'; //14
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function(){//16
  startOver.hidden = false; //17
  nextThree.hidden = true; //17
  document.getElementById('word-one').innerHTML = 'HAP-'; //18
  document.getElementById('word-two').innerHTML = 'PY'; //18
  document.getElementById('word-three').innerHTML = 'BIRTH'; //18
  document.getElementById('word-four').innerHTML = 'DAY'; //18
  document.getElementById('word-five').innerHTML = 'TO'; //18
  document.getElementById('word-six').innerHTML = 'YOU!'; //18
  document.getElementById('letter-note-one').innerHTML = 'F'; //19
  document.getElementById('letter-note-two').innerHTML = 'F'; //19
  document.getElementById('letter-note-three').innerHTML = 'E'; //19
  document.getElementById('letter-note-four').innerHTML = 'C'; //19
  document.getElementById('letter-note-five').innerHTML = 'D'; //19
  document.getElementById('letter-note-six').innerHTML = 'C'; //19
  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}