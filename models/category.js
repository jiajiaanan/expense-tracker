const mongoose = require('mongoose')
const Schema = mongoose.Schema //模組
const categorySchema = new Schema({ //新建schema
  id: {
    type: Number, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  name: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  }
})
module.exports = mongoose.model('Category', categorySchema)