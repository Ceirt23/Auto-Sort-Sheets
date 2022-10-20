function myFunction() {
    2
      
    3
    }
    4
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    5
    var sheet = ss.getSheets()[0];
    6
    var range = sheet.getRange("A1:B");
    7
    ​
    8
    // Sorts by the values in the labled column)
    9
    range.sort(2);
    10
    ​