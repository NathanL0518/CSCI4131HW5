var mysql = require("mysql");

// create connection pool
var connPool = mysql.createPool({
    host: "cse-mysql-classes-01.cse.umn.edu",
    user: "C4131F22U63",
    database: "C4131F22U63",
    password: "4019", // we really shouldn't be saving this here long-term -- and I probably shouldn't be sharing it with you...
    port: '3306'
});

// function to get the contacts
function getContact(filter) {
  console.log(filter)
  if(filter == 'all' || filter == 'ALL'){
    sql = "select * from contacts"
  }
  else{
    sql= `select * from contacts where category = '${filter}'`
  }
  return new Promise((resolve, reject)=>{
    console.log("sql: " + sql)
    connPool.query(sql, (err, rows)=>{
      if (err) {
        console.log("fail to fetch to the database")
        reject(err);
      } else if (rows.length>0) {
        console.log("successfully fetched from the database")
        resolve(rows);
      } else {
        console.log("databse empty")
        resolve(undefined)
      }
    })
  })
}

// function to add to the contact log
function addContact(contact) {
    return new Promise((resolve, reject)=>{
      const sql = "insert into contacts (email, title, username, link, category, msg) values (?,?,?,?,?,?)"
      let { email, title, username, link, category, msg } = contact
      link = contact.link == '' ? null : link
      connPool.query(sql, [email, title, username, link, category, msg], (err, rows)=>{
        if (err) {
          console.log("fail to add to the database")
          reject(err);
        } else {
          console.log("added to the database")
          resolve(rows);
        }
      })
    })
}
exports.addContact=addContact
exports.getContact=getContact