const fs = require("fs");
const path = require("path");
const raiz_path = path.join(__dirname, "../")
const docs_path = `${raiz_path}\docs`;
const main_path = `${raiz_path}\main`;

fs.readFile(`${main_path}\\names_test.txt`, "utf-8", function(err, data) {
    const new_data = data.split('\n');
    const arr_of_new_names = [];
    let new_names = "";

    for(let i of new_data) {

        arr_of_new_names.push(`Test - ${i}`);
    }

    new_names = arr_of_new_names.toString();
    new_names = new_names.replace(/,/g, '');

    createFile(new_names);
});

function createFile(text) {
    fs.writeFile(`${docs_path}\\new_names_test.txt`, text, function(erro) {
        if(erro) {
            throw erro;
        }

        console.log("Arquivo salvo");
    });
}