# Piano player
You’re a web developer who has been hired by a music education company. This client wants you to create an interactive game to help their beginner-level piano students study. Create a piano player with DOM events in JavaScript!

## Installation
Set up a html:5,  css and javascript documents in your text editor of choice.

## Steps
1.
At the beginning of the code, we have variable name assignments for the <code>keys</code> array and the <code>notes</code> array. There is also a function looping through the elements of the <code>keys</code> array and pushing them to the <code>notes</code> array.

After the second comment, create a function named <code>keyPlay</code> that changes the background color of the keys when they are pressed down.

Be sure to use the <code>.target</code> property in the function because the target is being modified in this case.

2.

Next, create a function named <code>keyReturn<code> that returns the background color of the keys to their default with an empty string <code>''</code> when the mouse is released on the element. Be sure to use the <code>.target</code> property.

3.
Now that you have created two functions that change the color of the key elements, you must assign them as the values of event handler properties.

Create a named function and leave the code block blank for now. This function will be used later on to assign events to the keys, so it should take one parameter — you can call it <code>note</code>.

4.
Inside the function, create an event handler that runs the <code>keyPlay</code> as an event handler when a <code>mousedown</code> event fires on any <code>note</code>.

5.
Inside the function, create a second event handler property that runs the <code>keyReturn</code> when a <code>mouseup</code> event fires on any <code>note</code>.

6.
At the beginning of the code, we have variable name assignments for the <code>keys</code> array and the empty <code>notes</code> array. There is also a function looping through the <code>keys</code> array and pushing the <code>keys</code> elements to the <code>notes</code> array to be assigned a variable name.

Now, you must create a <code>.forEach</code> loop that will pass the elements in the <code>notes</code> array through your event assignment function.

7.
Now, the program knows what to do when each piano key has a <code>mousedown</code> or <code>mouseup</code> event fired on it. Run your code and see how it works!

8.
Next, there are variables that represent the progress buttons in the song box below that allow students to progress the piano.

The <code>nextOne</code>, <code>nextTwo</code>, <code>nextThree</code>, and <code>startOver</code> change the lyrics and musical notes of the song to help the student play along. In the beginning of the song the only button the student needs is <code>nextOne</code>. Because of this the <code>.hidden</code> properties of the other buttons are assigned the value of <code>true</code>.

Now you must create events on all the progress buttons. First, create an event handler property with a <code>click</code> event on the <code>nextOne</code> element.

9.
To begin modifying the song box, you must switch the progress buttons first.

Using an anonymous event handler function, make the following changes to the button that appears after <code>nextOne</code> is clicked:

    1. Reveal the nextTwo button by changing the .hidden property to make the nextTwo button appear.
    2. Hide the nextOne button by changing the .hidden property to hide the nextOne button.

10.
Next, a <code>click</code> event firing on the <code>nextOne</code> must change the music notes that guide the piano student through the song.

Add the following changes to the <code>nextOne</code> event handler function so the musical notes change when the button is clicked.

    1. Change the content of the element with an ID of letter-note-five to D.
    2. Change the content of the element with an ID of letter-note-six to C.

11.
Create another event handler property with a <code>click</code> event on the button element called <code>nextTwo</code>. Then assign the property to the value of an anonymous event handler function.

12.
Make the following changes to the button that appears when <code>nextTwo</code> is clicked:

    1. Reveal the nextThree button by changing the .hidden property to make the nextThree button appear.
    2. Hide the nextTwo button by changing the .hidden property to hide the nextTwo button.

13.
Once the student has reached this point of the Happy Birthday song the lyrics changes from <code>HAP-PY BIRTH-DAY TO YOU</code> to <code>HAP-PY BIRTH-DAY DEAR FRI-END</code>.

Make the following changes to the lyrics in the function when the button is clicked:

    1. Change the content of the element with an ID of word-five to DEAR.
    2. Change the content of the element with an ID of word-six to FRI-.

14.
Now you have the lyrics <code>HAP-PY BIRTH-DAY DEAR FRI-</code>. To finish the line, you must add the <code>-END</code> to the song box under the piano.

The <code>-END</code> element is stored in the <code>lastLyric</code> variable.

Add a statement to the event handler function for <code>nextTwo</code> that changes the display property of <code>lastLyric</code> to <code>'inline-block'</code>.

15.
A <code>click</code> event firing on the second button must also change the music notes to guide the piano student through the song.

Add the following changes to the <code>nextTwo</code> event handler function so the musical notes change when the button is clicked:

    1. Change the content of the element with an ID of letter-note-three to G.
    2. Change the content of the element with an ID of letter-note-four to E.
    3. Change the content of the element with an ID of letter-note-five to C.
    4. Change the content of the element with an ID of letter-note-six to B.

16.
Create an event handler property with a <code>click</code> event on the <code>nextThree</code> element.

17.
Using an anonymous event handler function, make the following changes to the button that appears when <code>nextThree</code> is clicked:

    1. Reveal the startOver button by changing the .hidden property to make the startOver button appear.
    2. Hide the nextThree button by changing the .hidden property to hide the nextThree button.

18.
Add the following changes to the <code>nextThree</code> event handler function so the lyrics change when this button is clicked.

    1. Change the content of the element with an ID of word-one to HAP-.
    2. Change the content of the element with an ID of word-two to PY.
    3. Change the content of the element with an ID of word-three to BIRTH.
    4. Change the content of the element with an ID of word-four to DAY
    5. Change the content of the element with an ID of word-five to TO.
    6. Change the content of the element with an ID of word-six to YOU!.

19.
Add the following changes to the <code>nextThree</code> event handler function so the musical notes change when the button is clicked.

    1. Change the content of the element with an ID of letter-note-one to F.
    2. Change the content of the element with an ID of letter-note-two to F.
    3. Change the content of the element with an ID of letter-note-three to E.
    4. Change the content of the element with an ID of letter-note-four to C.
    5. Change the content of the element with an ID of letter-note-five to D.
    6. Change the content of the element with an ID of letter-note-six to C.

20.
Now you have the lyrics <code>HAP-PY BIRTH-DAY TO YOU! -END</code> — that couldn’t be right! To finish the line you must get rid of the “-end” in the song box.

Add a statement to the event handler function for <code>nextThree</code> that changes the <code>display</code> property of <code>lastLyric</code> back to <code>'none'</code>.

21.
Congrats, you’ve completed the Piano Player! Play around with the piano and the song box to fire all the events.

## Credits
www.codecademy.com
### License
MIT License

Copyright (c) 2025 Adanta Griffin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.