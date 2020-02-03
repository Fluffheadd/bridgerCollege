"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: stephanie
   Date:   1/13/2020

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

// generate an outline based on h1 through h6 headings in the source Document

window.addEventListener("load", makeOutline);

function makeOutline() {
  // location of the document outline
  var outline = document.getElementById("outline");
  // source document for the outline
  var source = document.getElementById("doc");
  //variables containing document fragments
  var mainHeading = document.createElement("h1");
  var outlineList = document.createElement("ol");
  var headingText = document.createTextNode("Outline");

  // attach the fragments using the document node tree
  mainHeading.appendChild(headingText);
  outline.appendChild(mainHeading);
  outline.appendChild(outlineList);

  createList(source, outlineList);
}

function createList(source, outlineList) {
  var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

  var prevLevel = 0;

  // running total of the article headings
  var headNum = 0;
  // loop through all of the child nodes of source article until no child nodes are left
  for (var n = source.firstChild; n !== null; n = n.nextSibling) {
    // EXAMINE ONLY ARTICLE HEADINGS
    var headLevel = headings.indexOf(n.nodeName);
    // check if headLevel has a vald heading value
    if (headLevel !== -1) {
      // an an id attribute to the heading if it is missing
      headNum++;
      if (n.hasAttribute("id") === false) {
        n.setAttribute("id", "head" + headNum);
      }
      var listElem = document.createElement("li");
      // create the HREFs to the document HEADINGS
      var linkElem = document.createElement("a");
      // changes the text of the link to match the heading
      linkElem.innerHTML = n.innerHTML;
      linkElem.setAttribute("href", "#" +n.id);

      // append the link to the list item
      listElem.appendChild(linkElem);

      // new IF statements to determine where list items should go
      if (headLevel === prevLevel) {
        // append the list item to the current list
        outlineList.appendChild(listElem);

      } else if (headLevel > prevLevel) {
        // start a new nested list
        var nestedList = document.createElement("ol");
        nestedList.appendChild(listElem);

        // append the nested list to the last item in the current list
        outlineList.lastChild.appendChild(nestedList);
      } else {
        // calculate the difference between the current and previous level
        var levelUp = prevLevel - headLevel;
        // go up to the higher level list
        for (var i = 1; i >= levelUp; i++) {
          outlineList = outlineList.parentNode.parentNode;
        }
        // update the value of prevLevel
        prevLevel = headLevel;

      }


    } //end of original if statement
  } // end of for loop
} //ends the createList() function
