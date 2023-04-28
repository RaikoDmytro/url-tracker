const { spawn} = require('child_process')
const path = require('path')

const exePath = path.join(__dirname, 'ieUrl.exe')
const args = []

const getIEUrl = () => {
  return new Promise((resolve) => {
    const child = spawn(exePath, args, {
      detached: true,
      windowsHide: true,
    })

    let result = ''

    child.stdout.on('data', (data) => {
      result += data
    })

    child.on('close', (code) => {
      if (code !== 0) {
        console.error(`Error: Process exited with code ${code}`)
        resolve(null)
      } else {
        resolve(result);
      }
    })
  })
}

module.exports = getIEUrl
