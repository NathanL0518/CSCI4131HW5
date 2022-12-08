var mysql = require("mysql");

// create connection pool
var con = mysql.createPool({
    host: "cse-mysql-classes-01.cse.umn.edu",
    user: "C4131F22U63",
    database: "C4131F22U63",
    password: "4019", // we really shouldn't be saving this here long-term -- and I probably shouldn't be sharing it with you...
    port: '3306'
});

// function to get the contacts
function getContact(filter, value) {
    return new Promise((resolve, reject)=>{
      const sql = "select * from user where username=?"
      connPool.query(sql, [username], (err, rows)=>{
        if (err) {
          reject(err);
        } else if (rows.length>0) {
          resolve(rows[0]);
        } else {
          resolve(undefined)
        }
      })
    })
}

// function to add to the contact log
function addContact(contact) {
    return new Promise((resolve, reject)=>{
      console.log("added to the database")
      const sql = "insert into contacts (email, title, username, link, category, msg) values (?,?,?,?,?,?)"
      let { email, title, username, link, category, msg } = contact
      link = contact.link == '' ? null : link
      connPool.query(sql, [email, title, username, link, category, msg], (err, rows)=>{
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    })
}
