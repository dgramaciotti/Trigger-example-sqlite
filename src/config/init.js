const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const DB_PATH = './db.sqlite';

const db = new sqlite3.Database(path.resolve(DB_PATH), (err) => console.log(err));

db.serialize(() => {
    readAndRunSqlFiles(__dirname + '/init', db);
});

function readAndRunSqlFiles(folderPath, db){
    fs.readdir(folderPath, (err, filenames) => {
        if(err) throw err;
        filenames.forEach(fileName => {
            const query = fs.readFileSync(folderPath + '/' + fileName).toString();
            db.run(query, (err) => {throw err});
        });
    })
}


