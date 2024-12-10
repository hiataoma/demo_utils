const XLSX = require('xlsx')

/**
 * 读取并解析指定的Excel文件
 * @returns {Promise} 返回解析后的JSON数据
 */
function readExcelFile() {

  return new Promise((resolve, reject) => {
    try {
      const path = require('path')
      console.log(__dirname)

      const filePath = path.join(__dirname, '/data/shaoxing.xlsx')
      // 直接读取文件
      const workbook = XLSX.readFile(filePath)
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]
      
      // 将工作表转换为JSON数据
      const jsonData = XLSX.utils.sheet_to_json(worksheet)
      resolve(jsonData)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * 读取Excel文件中的所有sheet并转换为JSON
 * @returns {Promise} 返回包含所有sheet数据的Promise
 */
function readAllSheets() {
  return new Promise((resolve, reject) => {
    try {
      const path = require('path')
      const filePath = path.join(__dirname, '/data/shaoxing.xlsx')
      
      // 读取Excel文件
      const workbook = XLSX.readFile(filePath)
      
      // 存储所有sheet的数据
      const allSheetData = {}
      
      // 遍历所有sheet
      workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName]
        // 将每个工作表转换为JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        allSheetData[sheetName] = jsonData
      })
      
      resolve(allSheetData)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * 将每个sheet拆分为单独的JSON文件
 * @param {Object} allSheetData 所有sheet的数据
 * @returns {Promise} 返回写入文件的Promise
 */
function writeSeparateJsonFiles(allSheetData) {
  return new Promise((resolve, reject) => {
    // 清空json目录中的内容
    const fs = require('fs')
    const path = require('path')
    const jsonDir = path.join(__dirname, 'json')
    
    if (fs.existsSync(jsonDir)) {
      const files = fs.readdirSync(jsonDir)
      files.forEach(file => {
        const filePath = path.join(jsonDir, file)
        fs.unlinkSync(filePath)
      })
    }
    try {
      const fs = require('fs')
      const path = require('path')
      
      // 确保json目录存在
      const jsonDir = path.join(__dirname, 'json')
      if (!fs.existsSync(jsonDir)) {
        fs.mkdirSync(jsonDir)
      }
      
      // 遍历每个sheet并写入单独的文件
      Object.keys(allSheetData).forEach(sheetName => {
        const jsonPath = path.join(jsonDir, `${sheetName}.json`)
        fs.writeFileSync(jsonPath, JSON.stringify(allSheetData[sheetName], null, 2))
      })
      
      resolve('所有sheet已分别写入JSON文件')
    } catch (error) {
      reject(error) 
    }
  })
}



readAllSheets().then(res => {
    writeSeparateJsonFiles(res)
})



