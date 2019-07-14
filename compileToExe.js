const { compile } = require('nexe')

compile({
  input: './dist/app.js',
  resources: ['./dist/public/**/**'],
  output: './dist/gameLauncher.exe'
}).then(() => {
  console.log('success')
})