// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')
const Category = require('../../models/category')
const category = require('../../models/category')

// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id   // 變數設定
  let totalAmount = 0

  Record.find({ userId })// 加入查詢條件
    .then((records) => {
      records.forEach(record => {
        return totalAmount += record.amount
      })
    })
    .catch(error => console.error(error))

  Record.find({ userId })// 加入查詢條件
    .lean()
    .sort({ date: 'desc' }) // desc 或 asc
    .then((records) => {
      return Category.find()
        .lean()
        .then((categories) => {
          return res.render('index', { records, categories, totalAmount })
        })
    })
    .catch(error => console.error(error))
})


// 篩選類別功能
router.get('/sortby', (req, res) => {
  const sort = req.query.sort
  const userId = req.user._id
  let totalAmount = 0

  Record.find({ userId })
    .lean()
    .then(records => records.filter(record => record.categoryIconId.toString() === sort))
    .then((records) => {
      records.forEach(record => {
        return totalAmount += record.amount
      })
      console.log(totalAmount)
      return res.render('index', { records, totalAmount, sort })
    })
    .catch(error => console.error(error))
})

// 匯出路由模組
module.exports = router