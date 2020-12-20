const xlsx = require("xlsx")

class ReadExcel {

    getExcelData(path, sheetName){
        let wb = xlsx.readFile(path);
        let wsheet = wb.Sheets[sheetName];
        return xlsx.utils.sheet_to_json(wsheet);
    }

}

exports.readExcel = ReadExcel