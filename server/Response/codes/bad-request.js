const respond = require('../respond')

const send = (response, message, data) => {
  
  let code=400

  respond(response, code, message, data)
}
module.exports = send
