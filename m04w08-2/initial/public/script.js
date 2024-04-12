// // create a new li
// const myLi = document.createElement('li'); // <li></li>

// // create a new text node
// const myTextNode = document.createTextNode('Five'); // "Five"

// // append the text node onto the li
// myLi.appendChild(myTextNode); // <li>Five</li>

// // grab the main-list from the DOM
// const mainList = document.getElementById('main-list');

// // append the new li onto the main-list
// mainList.appendChild(myLi); // cannot append to null

// jQuery('<h2>'); // create this element
// jQuery('.content'); // find this element on the page

// console.log(jQuery);

// const myLi = $('<li>'); // <li></li>
// myLi.text('Seven'); // <li>Six</li>

$(document).ready(() => {}); // old style document-ready
$(() => {}); // new style document-ready

// document-ready === wait for the document to fully load before calling the callback
$(() => {
  const myLi = $('<li>Ten</li>');

  myLi.on('click', () => {
    console.log('the li was double clicked on');
  });

  const html = $('html');
  html.on('click', () => {
    console.log('something in the html was clicked on');
  });

  const mainList = $('#main-list');
  mainList.prepend(myLi);
})
