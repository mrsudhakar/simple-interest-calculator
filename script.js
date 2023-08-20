var chart;

function calculate() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var time = parseFloat(document.getElementById("time").value);

  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  var totalAmount = principal;
  var dataset = [];

  for (var i = 1; i <= time; i++) {
    var interest = (principal * rate * i) / 100;
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + i + "</td><td>" + interest.toFixed(2) + "</td><td>" + (totalAmount + interest).toFixed(2) + "</td>";
    tableBody.appendChild(row);

    dataset.push(interest);
    totalAmount += interest;
  }

  if (chart) {
    chart.destroy();
  }

  var chartData = {
    labels: Array.from({ length: time }, (_, i) => "Year " + (i + 1)),
    datasets: [{
      label: "Interest Earned",
      data: dataset,
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#8CC152",
        "#4D5360",
        "#AC92EC",
        "#FF9F40"
      ],
    }],
  };

  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  var chartElement = document.getElementById("chart");
  chart = new Chart(chartElement, {
    type: "pie",
    data: chartData,
    options: chartOptions,
  });
}
