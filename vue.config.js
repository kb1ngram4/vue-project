const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer:{
    port:4000,
    open:true
  },
  lintOnSave:false,
  //配别名
  configureWebpack:{
    resolve:{
      alias:{
        'components':resolve('src/components'),
        'pages':resolve('src/pages')
      }
    }
  }
}

