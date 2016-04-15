'use strict'

$(document).ready(init)

function init(){
  var $button = $('.addnew').click(addNewContact)

}
function appendValues() {

//  getting values from  input fields
  var name = $('#name').val();
  var number = $('#number').val();
  var img = $('#lastname').val();
  var address = $('#address').val();
  var email = $('#email').val();
   // creating dom elements and add classes
  var $tr = $('<tr>');
  var $tdName = $('<td>').addClass('name');
  var $tdNumber = $('<td>').addClass('number');
  var $tdimg = $('<td>').addClass("img");
  var $tdaddress = $('<td>').addClass("address");
  var $tdemail = $('<td>').addClass("email");

  // appaending DOM elements to tbody
  $tdName.append(name);
  $tdNumber.append(number);
  $tdimg.append(img);
  $tdaddress.append(address);
  $tdemail.append(email);
  $tr.append($tdName).append($tdNumber).append($tdimg).append($tdaddress).append($tdemail);

  $('#rowDisplay').append($tr);
}

// Invoking new funciton
function addNewContact(){
  appendValues();
// clearing the input fields
  $('#rowDisplay').find('#number').val('');
  $('#rowDisplay').find('#lastname').val('');
  $('#rowDisplay').find('#name').val('');
  $('#rowDisplay').find('#address').val('');
  $('#rowDisplay').find('#email').val('');
}
