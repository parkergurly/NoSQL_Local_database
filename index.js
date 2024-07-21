const { readDb, writeDb } = require("./db_functions");

// const dataObj = {
//     name: 'allie',
//     favorite_numbers : [2,14,49]
// }

// writeDb(dataObj)


// console.log(readDb())

const saved_data = readDb()

saved_data['number_of_bananas'] = 4

writeDb(saved_data)