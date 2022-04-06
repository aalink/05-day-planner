// Get the container <div>
var container = document.getElementById("container");

// Display a live clock that includes the date.
window.setInterval(function () {
  $("#currentDay").html(moment().format("dddd MM/DD/YYYY H:mm:ss"));
}, 1000);

// Hours of the day to be tracked.
var hours = [
  moment().format("9"),
  moment().format("10"),
  moment().format("11"),
  moment().format("12"),
  moment().format("13"),
  moment().format("14"),
  moment().format("15"),
  moment().format("16"),
  moment().format("17"),
];

// Create the HTML needed to display each row consisting of time, text area, and the save button
hours.forEach((hour) => {
  var row = document.createElement("div");
  row.classList.add("row", "time-block");
  row.innerHTML = `
    <div id="${hour}" class="col-md-1 hour">${hour}</div>
    <textarea class="col-md-10 description" id="text-area-${hour}"></textarea>
    <button data-id="${hour}"  class="col-md-1 btn saveBtn"><i class="fas fa-save"></i></button>
  </div>`;
  container.appendChild(row);
});

// Check each row and determine whether they match the current hour, and if they exist before or after the current hour.
// If it's before, change text area to grey based on "past" class.
// If it matches the current hour, change text area to red based on "present" class.
// If it's after, change text area to green based on "future" class.
$(".time-block").each(function () {
  var timeBlock = parseInt(this.children[0].id);
  var now = moment().hours();
  $(this).addClass("past");
  if (now === timeBlock) {
    $(this).addClass("present");
  }
  if (now > timeBlock) {
    $(this).addClass("past");
  }
  if (now < timeBlock) {
    $(this).addClass("future");
  }
});

// Assign a function to the save button that will save the text content and the associated hour as a key/value pair to local storage.
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var key = $(this).attr("data-id");
  localStorage.setItem(key, value);
});

// Retrieve data from local storage to display the stored data if the user leaves or reloads the page.
$("#text-area-9").val(localStorage.getItem("9"));
$("#text-area-10").val(localStorage.getItem("10"));
$("#text-area-11").val(localStorage.getItem("11"));
$("#text-area-12").val(localStorage.getItem("12"));
$("#text-area-13").val(localStorage.getItem("13"));
$("#text-area-14").val(localStorage.getItem("14"));
$("#text-area-15").val(localStorage.getItem("15"));
$("#text-area-16").val(localStorage.getItem("16"));
$("#text-area-17").val(localStorage.getItem("17"));
