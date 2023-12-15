import { Database } from 'sqlite3'
import express, { Express, Request, Response } from 'express'
import cors from 'cors'

require('dotenv').config()
const app: Express = express()
const port = process.env.PORT

// MIDDLEWARE FUNCION
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

const db: Database = new Database('db.sqlite3')
db.on('open', () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      ID INTEGER PRIMARY KEY,
      name VARCHAR(32),
      email VARCHAR(64),
      passwd VARCHAR(64)
    );

    CREATE TABLE IF NOT EXISTS items (
      ID INTEGER PRIMARY KEY,
      userID INT,
      date DATE,
      type TINYINT(1),
      amount INT(10),
      tag INT,

      FOREIGN KEY(userID) REFERENCES users(ID)
    );

    CREATE TABLE IF NOT EXISTS tags (
      ID INTEGER PRIMARY KEY,
      userID INT,
      name VARCHAR(32),

      FOREIGN KEY(userID) REFERENCES users(ID)
    );
    `)
})

// ENDPOINTS

// logincheck
app.post('/logincheck', (req: Request, res: Response) => {
  const table = 'users'
  const field1 = 'email'
  const field2 = 'passwd'
  const value1 = req.body.email
  const value2 = req.body.passwd

  db.run(
    `SELECT * FROM ${table} WHERE ${field1}='${value1}' AND ${field2}='${value2}'`,
    (err, results) => {
      sendResults(table, err, results, req, res, 'logincheck from')
    }
  )
})

app.get('/', (req: Request, res: Response) => {
  res.send('Simpe NodeJS Backend API')
})

// GET all records
app.get('/:table', (req: Request, res: Response) => {
  const table = req.params.table

  db.all(`SELECT * FROM ${table}`, (err, results) => {
    sendResults(table, err, results, req, res, 'sent from')
  })
})

// GET one record by ID
app.get('/:table/:id', (req: Request, res: Response) => {
  const table = req.params.table
  const id = req.params.id

  db.all(`SELECT * FROM ${table} WHERE ID=${id}`, (err, results) => {
    sendResults(table, err, results, req, res, 'sent from')
  })
})

// GET records by field
app.get('/:table/:field/:op/:value', (req: Request, res: Response) => {
  const table = req.params.table
  const field = req.params.field
  const op = getOperator(req.params.op)
  let value = req.params.value

  if (op == ' like ') {
    value = `%${value}%`
  }

  db.all(`SELECT * FROM ${table} WHERE ${field}${op}'${value}'`, (err, results) => {
    sendResults(table, err, results, req, res, 'sent from')
  })
})

// POST new record to table
app.post('/:table', (req: Request, res: Response) => {
  const table = req.params.table

  const values = '"' + Object.values(req.body).join('","') + '"'
  const fields = Object.keys(req.body).join(',')

  db.all(`INSERT INTO ${table} (${fields}) VALUES(${values})`, (err, results) => {
    sendResults(table, err, results, req, res, 'insert into')
  })
})

// PATCH record in table by field (update)
app.patch('/:table/:field/:op/:value', (req: Request, res: Request) => {
  const table = req.params.table
  const field = req.params.field
  const op = getOperator(req.params.op)
  let value = req.params.value

  if (op == ' like ') {
    value = `%${value}%`
  }

  const values = Object.values(req.body)
  const fields = Object.keys(req.body)

  let sql = ''
  for (let i = 0; i < values.length; i++) {
    sql += fields[i] + `='` + values[i] + `'`
    if (i < values.length - 1) {
      sql += ','
    }
  }

  db.all(`UPDATE ${table} SET ${sql} WHERE ${field}${op}'${value}'`, (err, results) => {
    sendResults(table, err, results, req, res, 'updated in')
  })
})

// DELETE one record by ID
app.delete('/:table/:id', (req: Request, res: Response) => {
  const table = req.params.table
  const id = req.params.id

  db.all(`DELETE FROM ${table} WHERE ID=${id}`, (err, results) => {
    sendResults(table, err, results, req, res, 'sent from')
  })
})

// DELETE record from table by field
app.delete('/:table/:field/:op/:value', (req: Request, res: Response) => {
  const table = req.params.table
  const field = req.params.field
  const op = getOperator(req.params.op)
  let value = req.params.value

  if (op == ' like ') {
    value = `%${value}%`
  }

  db.all(`DELETE FROM ${table} WHERE ${field}${op}'${value}'`, (err, results) => {
    sendResults(table, err, results, req, res, 'deleted from')
  })
})

// DELETE all records from table
app.delete('/:table', (req: Request, res: Response) => {
  const table = req.params.table

  db.all(`DELETE FROM ${table}`, (err, results) => {
    sendResults(table, err, results, req, res, 'deleted from')
  })
})

// send results to the client
function sendResults(table: string, err: any, results: any, req: any, res: any, msg: string) {
  if (err) {
    console.log(req.socket.remoteAddress + ' >> ' + err.sqlMessage)
    res.status(500).send(err.sqlMessage)
  } else {
    console.log(`${req.socket.remoteAddress} >> ${results.length} record(s) ${msg} ${table} table.`)
    res.status(200).send(results)
  }
}

// change operator value
function getOperator(op: string) {
  switch (op) {
    case 'eq': {
      op = '='
      break
    }
    case 'lt': {
      op = '<'
      break
    }
    case 'gt': {
      op = '>'
      break
    }
    case 'lte': {
      op = '<='
      break
    }
    case 'gte': {
      op = '>='
      break
    }
    case 'not': {
      op = '!='
      break
    }
    case 'lk': {
      op = ' like '
      break
    }
  }
  return op
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
