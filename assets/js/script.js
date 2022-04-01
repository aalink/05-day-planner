var container = document.getElementById("container");

var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach((hour) => {
  var row = document.createElement("div");
  row.classList.add("row", "time-block");
  row.innerHTML = `
    <div class="col-md-1 hour">${hour}</div>
    <textarea class="col-md-10 description" name="" id=""></textarea>
    <button class="col-md-1 btn saveBtn">
      <i class="fas fa-save"></i>
    </button>
  </div>`;
  container.appendChild(row);
});
