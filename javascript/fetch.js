const fs = require("fs")
const path = require("path")


function fetchImages(){
    const folder = path.resolve(__dirname, "../assets/project-images")
    const results = fs.readdirSync(folder)
    const resultsObj = {...results}

    return resultsObj
}




module.exports = {fetchImages}

