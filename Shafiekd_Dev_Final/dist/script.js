// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

// SPEAK //
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}



document.getElementById('button').addEventListener('click', event => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('speak').value)));

});

//Random Selector //

var name2;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random() * n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)];
}


name2 = [];


document.getElementById('add').addEventListener('click', event => {
  if (getNumberOrString(document.getElementById('text').value) > '') {
    name2.unshift(getNumberOrString(document.getElementById('text').value));
  } else {
  }

});

document.getElementById('select_facilitator').addEventListener('click', event => {
  if (!name2.length) {
  } else {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = randomMember(name2);

    element_list.appendChild(new_li);
  }

});

document.getElementById('clear').addEventListener('click', event => {
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();

});

//RANDOM SELECTOR //
var name2;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random() * n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)];
}


name2 = [];


document.getElementById('add').addEventListener('click', event => {
  if (getNumberOrString(document.getElementById('text').value) > '') {
    name2.unshift(getNumberOrString(document.getElementById('text').value));
  } else {
  }

});

document.getElementById('select_facilitator').addEventListener('click', event => {
  if (!name2.length) {
  } else {
    let element_display = document.getElementById('display');
    element_display.innerText = randomMember(name2);
  }

});

document.getElementById('clear').addEventListener('click', event => {
  let element_display2 = document.getElementById('display');
  element_display2.replaceChildren();
  name2 = [];

});

// COMMENT BOX //

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}



document.getElementById('submitbtn').addEventListener('click', event => {
  let element_comment_box = document.getElementById('comment-box');
  element_comment_box.innerText = getNumberOrString(document.getElementById('message').value);

});

document.getElementById('clear').addEventListener('click', event => {
  let element_comment_box2 = document.getElementById('comment-box');
  element_comment_box2.replaceChildren();

});