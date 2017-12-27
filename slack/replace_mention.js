const rules = Object.keys(process.env).reduce((obj, k) => {
  if (k.match(/^[US][A-Z0-9]{8}$/)) {
    const username = `@${process.env[k]}`

    if (k[0] === 'U') {
      // User mention
      obj[username] = () => `<@${k}>`
    }
    else if (k[0] === 'S') {
      // User group mention
      obj[username] = mention => `<!subteam^${k}|${mention}>`
    }
  }
  return obj
}, {})

const escapeRegExp = str => str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')

module.exports = function replaceMention(text) {
  return Object.keys(rules)
    .sort((a, b) => (b.length - a.length) || a.localeCompare(b))
    .reduce((newText, username) => (
      newText.replace(new RegExp(escapeRegExp(username), 'g'), rules[username])
    ), text)
}
