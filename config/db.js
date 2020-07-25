const mysql      = require('mysql');
const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'jim',
    password : 'mydev$2021',
    database : 'mydb'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        return;
    }
    console.log('Connection established');
});

con.query("SELECT * FROM test.obs_srt2", function (error,rows, fields) {
    if (error) throw error;
    rows.forEach( (row) =>  {
        console.log(`${row.OCGA}  ${row.Observation}`);
    });
});

con.end();