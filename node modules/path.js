const path= require('path')

const pathFile = "D:\certificates\certifications\Projects\os\path.js"

console.log(path.dirname(pathFile))

console.log(path.basename(pathFile))

console.log(path.extname(pathFile))

const newPathFile =path.join(path.dirname(pathFile),"os.js")

console.log(newPathFile)