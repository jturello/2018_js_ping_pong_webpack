import { pingPong } from './ping-pong';
import './styles.css';

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    $('#solution').empty();

    let goal = $('#goal').val();
    let output = pingPong(goal);
    output.forEach(function (element) {
      $('#solution').append("<li>" + element + "</li>");
    });
    $('#goal').val("");
  });
});
