//先建立第一個 SEED_USER，接著載入「SEED_USER 的支出紀錄」

const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')
const Record = require('../record')
const User = require('../user')
const Category = require('../category')
const SEED_RECORD = require('../seed_record.json')

const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '0000'
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 5 },
        (_, i) => {
          //類別篩選
          return Category.findOne({ name: SEED_RECORD[i].category })
            .then((data) => {
              const categoryId = data._id
              const categoryIconId = data.id
              //創建資料
              return Record.create({
                name: SEED_RECORD[i].name,
                date: SEED_RECORD[i].date,
                amount: SEED_RECORD[i].amount,
                userId,
                categoryId,
                categoryIconId
              })
            })
            .catch(error => console.error("categoryId error"))
        }
      ))
    })
    .then(() => {
      console.log('record created.')
      process.exit()
    })
    .catch(error => console.error(error))
})