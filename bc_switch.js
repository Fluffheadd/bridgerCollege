"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author:  stephanie
   Date:  1/13/2020

   Filename: bc_switch.js

   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view

*/
window.addEventListener("load", setupStyles);

function setupStyles() {
  // create a link element for the page view styles
  var pageStyle = document.createElement("link");
  pageStyle.setAttribute("href", "bc_page.css");
  pageStyle.setAttribute("rel", "stylesheet");
  pageStyle.setAttribute("disabled", "disabled");

  // append the link element to the document head
  document.head.appendChild(pageStyle);
  pageStyle.disabled = true;

  // insert buttons for style switcher
  var buttonDIV = document.createElement("div");
  buttonDIV.setAttribute("id", "styleButtons");

  var webButton = document.createElement("input");
  webButton.setAttribute("type", "button");
  webButton.setAttribute("value", "Web View");

  var pageButton = document.createElement("input");
  pageButton.setAttribute("type", "button");
  pageButton.setAttribute("value", "Page View");

  buttonDIV.appendChild(webButton);
  buttonDIV.appendChild(pageButton);

  // add the div which has the buttons attached to the page
  document.body.insertBefore(buttonDIV, document.body.firstChild);

  // append an embedded style sheet to the document head
  var buttonStyles = document.createElement("style");
  document.head.appendChild(buttonStyles);


  // add style rules to the embedded style sheet
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "div#styleButtons { \
    position: fixed; \
  }", 0);

  document.styleSheets[document.styleSheets.length - 1].insertRule(
     "div#styleButtons input { \
      background-color: rgba(68, 94, 186, 0.6); \
      border: 3px solid rgba(0, 24, 123, 0.6); \
      border-radius: 50%; \
      cursor: pointer; \
      color: white; \
      display: inline-block; \
      font-size: 1.2em; \
      height: 60px; \
      margin: 5px 10px; \
      width: 100px; \
    }", 1);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
      "@media print  { \
        div#styleButtons { \
      display: none; \
    } \
  }", 2);

  // turn the pageview style off and on
  webButton.onclick = function() {
    pageStyle.disabled = true;
  }

  pageButton.onclick = function() {
    pageStyle.disabled = false;
  }

}
