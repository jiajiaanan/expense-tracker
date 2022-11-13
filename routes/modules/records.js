const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

//new頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

//edit頁面路由
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId }) // 找到該筆record
    .lean() //把資料變成單純陣列
    .then((record) => {
      return Category.findOne({ _id: record.categoryId })//找到該筆 record.category 的 category._id
        .lean()
        .then((category) => {
          return res.render('edit', { record, category })
        }) //將該項category匯出 之後用.name撈出
    })
    .catch(error => console.log(error))
})

//Create功能
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, date, amount, category } = req.body
  return Category.findOne({ name: category })
    .then((data) => {
      const categoryId = data._id
      const categoryIconId = data.id
      return Record.create({
        name,
        date,
        amount,
        userId,
        categoryId,
        categoryIconId
      })
    })
    .then(() => {
      console.log("record created!")
      res.redirect('/')
    }) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

//Update功能
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, amount, category } = req.body
  return Record.findOne({ _id, userId })
    .then(record => {
      Category.findOne({ name: category })// 找到更新的該筆類別
        .then((data) => {
          record.name = name
          record.date = date
          record.amount = amount
          record.categoryId = data._id
          record.categoryIconId = data.id
          return record.save()
        })
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//Delete功能
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove()) //刪除該筆資料
    .then(() => res.redirect('/')) //導向根目錄頁
    .catch(error => console.log(error))
})

module.exports = router