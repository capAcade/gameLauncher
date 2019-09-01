const util = require('util');
const exec = util.promisify(require('child_process').exec);
const dns = require('dns');

var timer = setTimeout(function(){
    console.log('timeOut exceeded')
    process.exit()
}, 3000)

async function npmi() {
    console.log('checking npm');
    const { stdout, stderr } = await exec('npm i');
    console.log('npm results', stdout, stderr);
  }

async function gpull() {
  console.log('checking git')
  const { stdout, stderr } = await exec('git pull'); 
  console.log('git results', stdout, stderr);
  npmi();
}



console.log('check internet wait 3 seconds');
dns.resolve('www.google.com', function(err) {
    if (err) {
       console.log("No connection to internet");
    } else {
        clearTimeout(timer)
       console.log("Connected to internet check updates");
       gpull();
    }
  });
