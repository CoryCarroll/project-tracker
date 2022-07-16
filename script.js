// Creates real time date into the header
function getDate() {
    var today = moment().format('dddd, MMMM Do');
    $("#currentDay").text(today);
}
getDate();

// Creating save button icon
var saveBtn = $('.saveBtn');
var saveButton = $("<i class ='fas fa-save fa-lg'></i>")
saveBtn.append(saveButton);

// Create click event for save button
$("saveBtn").on('click', function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    saveIndex.reminder = $(this).siblings(".description").childern(".future").val();
    console.log(saveIndex);
    saveReminders();
    showReminders();
})

// Creates past present future classes depending on time of day
var plannerData = $("#reminder");
plannerData.attr("id", currentHour.id);
if (currentHour.time < moment().format("HH")) {
    plannerData.attr ({
        "class": "past",
    })
    } else if (currentHour.time === moment().format("HH")) {
        plannerData.attr ({
            "class": "present"
        })
    } else if (currentHour.time > moment().format("HH")) {
        plannerData.attr ({
            "class": "future"
        })
    };



