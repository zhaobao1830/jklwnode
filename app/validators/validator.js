const { LinValidator, Rule } = require('../../core/lin-validator-v2')

class NewsListValidator extends LinValidator {
  constructor() {
    super()
    this.account = [ // 账号
      new Rule('isLength', '不符合账号规则', {
        min: 4,
        max: 32
      })
    ]
    this.page = [
      new Rule('isInt', '需要是正整数', {
        min: 1
      })
    ]
    this.nums = [
      new Rule('isInt', '需要是正整数', {
        min: 1
      })
    ]
  }
}

module.exports = {
  NewsListValidator
}
