const fs = require("fs");

function main(value)
{
    // alert(value);  
    //alert("YES");
    //do something with input field value
    const JSON_OUTPUT_FILE_PATH = "./data_"+value+".json";
    fs.copyFile(JSON_OUTPUT_FILE_PATH, './data.json', (err) => {
        if (err) throw err;
        console.log('File was copied to destination');
        console.log(value);
      });
    // const jsonData = {
    //     matchesPlayedPerYear: result
    //   };
    //   const jsonString = JSON.stringify(jsonData);
    //   fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    //     if (err) {
    //       console.error(err);
    //     }
    //   });
    
}
main(value);