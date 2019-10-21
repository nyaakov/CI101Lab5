const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();

app.use(express.static('.'));
app.use(express.json());

app.get("/getBooks", function(req, res){
    const db = new sqlite3.Database('./CLCBooks.db');
    console.log('recieved');
    let output = '';
    db.serialize(function() {
        db.each("SELECT Books.ISBN, Books.Title, Books.Author, Availability.Available FROM Books, Availability WHERE Books.ISBN = Availability.ISBN", function(err, row) {
            if (row) {
                if (row.Available == 'Y') {
                    row.Available = "Yes";
                } else {
                    row.Available = "No";
                }
                output += `<tr> <td>` + row.Title + `</td><td>` + row.Author + `</td><td>` + row.ISBN + `</td> <td>` + row.Available + `</td></tr>`;
            }
        });
    });
    setTimeout(function(){ 
        db.close();
        res.send(output);
    }, 500);
});

app.listen('8080', function(){
    console.log("listening at port 8080...");
});