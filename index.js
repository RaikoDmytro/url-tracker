'use strict'

const supportedBrowsers = [
  'internet explorer'
]

export default (browser) => {
  if (process.platform !== 'win32' || !isSupportedBrowser(browser)) {
    return null
  }
  if (browser === 'internet explorer') {
    return require('./ie/')().then(r => r)
  }
  return null
}

function isSupportedBrowser(name) {
  return supportedBrowsers.includes(name)
}
