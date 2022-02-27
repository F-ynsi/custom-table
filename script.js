const rawData = [
  ["Product 1", "Description 1", "Price 1"],
  ["Product 2", "Description 2", "Price 2"],
  ["Product 3", "Description 3", "Price 3"],
  ["Product 4", "Description 4", "Price 4"],
  ["Product 5", "Description 5", "Price 5"],
  ["Product 6", "Description 6", "Price 6"],
];

function removeRow(row) {
  const rowId = row.parentNode.parentNode.rowIndex;
  document.getElementById("inner-table").deleteRow(rowId);
}

class CustomTable extends HTMLElement {
  constructor(data) {
    super();

    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    table.setAttribute("class", "table table-striped");
    table.setAttribute("id", "inner-table");

    for (var i = 0; i < data.length; i++) {
      const row = document.createElement("tr");
      for (var j = 0; j < data[i].length; j++) {
        const cell = document.createElement("td");
        cell.innerHTML += data[i][j];
        row.appendChild(cell);
      }
      const deleteButtonCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "btn btn-link");
      deleteButton.innerHTML = "delete";
      deleteButton.setAttribute("onclick", "removeRow(this)");

      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      tableBody.appendChild(row);
    }

    table.appendChild(tableBody);

    this.appendChild(table);
  }
}

customElements.define("custom-table", CustomTable);

function createProductsTable(data) {
  const tableContainer = document.getElementById("table-container");

  const CustomTable = customElements.get("custom-table");
  const table = new CustomTable(data);

  tableContainer.appendChild(table);
}

createProductsTable(rawData);
