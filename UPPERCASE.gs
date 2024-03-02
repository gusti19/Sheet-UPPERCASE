function onFormSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // 2 = Baris ke-2
  // 7 = Kolom G/Kolom Ke-7 
  var responseRange = sheet.getRange(2, 7, sheet.getLastRow() - 1, 5); 

  // Mengonversi nilai menjadi huruf besar
  var values = responseRange.getValues();
  var uppercaseValues = values.map(function(row) {
    return row.map(function(cell) {
      return cell.toString().toUpperCase();
    });
  });

  // Menulis kembali nilai yang sudah diubah menjadi huruf besar ke spreadsheet
  responseRange.setValues(uppercaseValues);
}
