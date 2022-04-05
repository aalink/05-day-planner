var container = document.getElementById("container");
// currentDay.textContent = moment().format('LLLL');

window.setInterval(function () {
  $('#currentDay').html(moment().format('dddd MM/DD/YYYY H:mm:ss'))
}, 1000);



var hours = [
  // moment().format("1"),
  // moment().format("2"),
  // moment().format("3"),
  // moment().format("4"),
  // moment().format("5"),
  // moment().format("6"),
  // moment().format("7"),
  // moment().format("8"),
  // moment().format("9"),
  // moment().format("10"),
  // moment().format("11"),
  // moment().format("12"),
  // moment().format("13"),
  // moment().format("14"),
  moment().format("15"),
  moment().format("16"),
  moment().format("17"),
  moment().format("18"),
  moment().format("19"),
  moment().format("20"),
  moment().format("21"),
  moment().format("22"),
  moment().format("23"),
];

console.log(moment.now());

hours.forEach((hour) => {
  var row = document.createElement("div");
  row.classList.add("row", "time-block");
  row.innerHTML = `
    <div id="${hour}" class="col-md-2 hour">${hour}</div>
    <textarea class="col-md-9 description" name="text-area-${hour}" id="${hour}"></textarea>
    <button data-id="${hour}"  class="col-md-1 btn saveBtn"><i class="fas fa-save"></i></button>
  </div>`;
  container.appendChild(row);
});

$(".hour").each(function () {
  var timeBlock = $(".hour");
  var now = moment().hours();
  // console.log(timeBlock);
  // console.log(now);
  // if (now === ".hour") ({
  //   timeBlock.classList.add(".present")
  // }
});

// function hourComparison() {
//   console.log(now);
//   if (hours.hour ) {
//   }
// }

// x = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
// y = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
