// Creates real time date into the header
function getDate() {
    var today = moment().format('dddd, MMMM Do');
    $("#currentDay").text(today);
}
getDate();

// Creating save button icon
var saveBtn = $('.saveBtn');

// Create click event for save button
$("#saveBtn").on('click', function(event) {
    event.preventDefault();
})

// Creates past present future classes depending on time of day
var plannerData = $("#hour-9");
var currentHour = moment().format('hh');
    if (currentHour < moment().format("hh")) {
    plannerData.addClass('past');
    } else if (currentHour.time === moment().format("hh")) {
        plannerData.addClass('present');
    } else if (currentHour.time > moment().format("hh")) {
        plannerData.addClass('future');
    };



