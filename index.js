const fs = require("fs");
const csv = require("csvtojson");
// const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
// const matchesWon = require("./ipl/matchesWon");
const topEcoBowlers = require("./ipl/topEcoBowlers");
const DEL_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data_2019.json";
// const JSON_OUTPUT_FILE_PATH_WON = "./public/data_won.json";
// const JSON_OUTPUT_FILE_PATH_2016 = "./public/data_2016.json";
function main() {
  csv()
    .fromFile(DEL_FILE_PATH)
    .then(deliveries => {
       let result = topEcoBowlers(deliveries,2019);
    const sortable = Object.entries(result)
        .sort(([,a],[,b]) => a-b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
       saveMatchesPlayedPerYear(sortable);
      console.log(sortable);

    });
}



function saveMatchesPlayedPerYear(result) {
    const jsonData = {
      matchesPlayedPerYear: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }


main();