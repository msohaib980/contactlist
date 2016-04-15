'use strict'

$(document).ready(init)

function init(){
  var $button = $('.addnew').click(addNewContact)

}
function appendValues() {

  var name = $('#name').val();
  var number = $('#number').val();
  var img = $('#lastname').val();
  var address = $('#address').val();
  var email = $('#email').val();
  var $tr = $('<tr>');
  var $tdName = $('<td>').addClass('name');
  var $tdNumber = $('<td>').addClass('number');
  var $tdimg = $('<td>').addClass("img");
  var $tdaddress = $('<td>').addClass("address");
  var $tdemail = $('<td>').addClass("email");


  $tdName.append(name);
  $tdNumber.append(number);
  $tdimg.append(img);
  $tdaddress.append(address);
  $tdemail.append(email);
  $tr.append($tdName).append($tdNumber).append($tdimg).append($tdaddress).append($tdemail);

  $('#rowDisplay').append($tr);
}
function addNewContact(){
  appendValues();

  $('#rowDisplay').find('#info').find('#name').val('');
  $('#rowDisplay').find('#info').find('#number').val('');
  $('#rowDisplay').find('#info').find('#lastname').val('');
  $('#rowDisplay').find('#info').find('#address').val('');
  $('#rowDisplay').find('#info').find('#email').val('');

}
