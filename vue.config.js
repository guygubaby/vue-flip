console.log(process.env)_

const publicPath = process.env.VERCEL ? '/' : '/vue-flip/'

console.log(publicPath)

module.exports = {
  publicPath,
  lintOnSave: false
}
