const { compile } = require('nexe')

compile({
  input: './dist/app.js',
  resources: ['./dist/public/**/**'],
  target:'windows-x64-12.6.0',
  output: './dist/gameLauncher'
}).then(() => {
  compile({
    input: './dist/app.js',
    resources: ['./dist/public/**/**'],
    target:'macos-x64-v8.4.0',
    output: './dist/gameLauncher'
  }).then(() => {
    console.log('success')
  })
})

