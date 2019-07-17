const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  // 入口方法
  static initCore(app) {
    InitManager.app = app
    InitManager.loadConfig()
    InitManager.initLoadRouters()
  }

  static loadConfig(path='') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static initLoadRouters() {
    // 通过requireDirectory获取app/api/v1下的所有routers
    // visit: whenLoadModule 函数
    requireDirectory(module, `${process.cwd()}/app/api`, {
      visit: whenLoadModule
    })

    // 用来判断引入的是router
    function whenLoadModule(obj) {
      if(obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitManager
