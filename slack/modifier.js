const replaceMention = require('./replace_mention')

module.exports = {
  github: body => {
    if (body.comment && body.comment.body) {
      body.comment.body = replaceMention(body.comment.body)
    }
    return body
  },
  // TODO: simple incoming webhook and any other services.
}
