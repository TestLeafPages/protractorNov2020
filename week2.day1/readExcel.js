const xlsx = require("xlsx")

function getExcelData(path, sheetName){
    let wb = xlsx.readFile(path) // Load the path of the workbook and store it
    let wsheet = wb.Sheets[sheetName] // Navigate to the particular sheet
    let values = xlsx.utils.sheet_to_json(wsheet) // Convert the values in the sheet to JSON format
    values.forEach(data => {
        console.log(data);   // Iterate it and print it (or pass it another file)
    })
}

getExcelData("./TC001.xlsx", "Sheet1")