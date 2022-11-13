const mongoose = require('mongoose')
const Schema = mongoose.Schema //模組
const recordSchema = new Schema({ //新建schema
  name: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  date: {
    type: String, //之後改成Date
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  userId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  },
  categoryId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true
  },
  categoryIconId: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Record', recordSchema)