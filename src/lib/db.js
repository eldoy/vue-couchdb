import PouchDB from 'pouchdb'
// import store from '@/store/store'

// Local db
// const db = new PouchDB('projects');

// Set up remote db
const db = new PouchDB('http://localhost:5984/projects')

// Adapter
const connection = {}
connection.info = (fn) => {
  db.info().then((info) => {
    fn(info)
  })
}

const account = {}

// Validations
// {
//   "_id": "_design/validate_account",
//   "validate_doc_update": "function(newDoc, oldDoc, userCtx) { if (newDoc.name.trim().length < 1) { throw({forbidden : 'can not be blank'});}}"
// }

// Create account
account.create = (a) => {
  return db.post({ ...a })
}

export default {
  connection,
  account
}
