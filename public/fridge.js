
//create database

const db = new Dexie('myDb');
db.verstion(1).stores({
  friends: `name, item description`
})

db.open()