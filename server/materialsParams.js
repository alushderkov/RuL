const fs = require('fs/promises');
const path = require("path");

async function readJSON(fileName) {

    const currentDir = __dirname;
    const parentDir = path.dirname(currentDir); 
    const materialsPath = path.join(parentDir, fileName);

    try {
        const jsonString = await fs.readFile(materialsPath, 'utf8');
        return JSON.parse(jsonString);
    } catch (err) {
        console.error(err);
        throw new Error(`No chance to read ${fileName} file`);
    }

}

async function initialization(fileName) {
    const jsonData = await readJSON(fileName);
    return jsonData; 
    //return jsonData.russianSections.morphology.independentParts.noun.tests;   
}

module.exports = initialization;
