// Create variable
var currentHour = moment().format('H');
var dataSaved = document.getElementById('description');

// Creating save button icon
var saveBtn = $('.saveBtn');

// Creates real time date into the header
function getDate() {
    var today = moment().format('dddd, MMMM Do');
    $("#currentDay").text(today);
}
getDate();

$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
    })
})

// Creates past present future classes depending on time of day
// Jerrod Linderman & Jessica Lane helped me with this function
$('.time-block').each(function() {
    var getHourId = parseInt($(this).attr('id').split('-')[1])

    $(this).removeClass("past");

    if (currentHour < getHourId) {
        $(this).addClass("future");
    } else if (currentHour == getHourId) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
})



