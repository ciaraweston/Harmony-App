var selectedRow = null

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
      insertNewRecord(formData);
    else
      updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["itemDescription"] = document.getElementById("itemDescription").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["location"] = document.getElementById("location").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("donationList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.itemDescription;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.quantity;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.location;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("itemDescription").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("location").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("itemDescription").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
  document.getElementById("location").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.itemDescription;
  selectedRow.cells[2].innerHTML = formData.quantity;
  selectedRow.cells[3].innerHTML = formData.location;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this donation ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("donationList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}