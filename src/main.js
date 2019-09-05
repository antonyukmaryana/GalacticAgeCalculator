import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticDate } from './GalacticDate';

$(document).ready(function () {
  $('#date-form').submit(function (event) {
    event.preventDefault();
    let ageInput = parseInt($('#age').val());
    let planetInput = $('#planet').val();
    let dateInput = new GalacticDate( ageInput, planetInput);
    dateInput.calculateGalacticAge();


    $("#solution").append("<li>  Your age on Earth is " + ageInput + " , and your age on " + planetInput + " is " + dateInput.planetAge + "</li>");

    
    });
  });
});
