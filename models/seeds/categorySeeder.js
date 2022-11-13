//建立類別資料庫
const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('../categoryList.json')

db.once('open', () => {
  for (let i = 0; i < 5; i++) {
    Category.create({ id : i+1 , name: categoryList[i].name })
  }

  console.log('categoryList created')
})