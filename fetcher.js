const url = process.argv.slice(2);
const request = require("request");

const fetcher = (url) => {
  request(url[0], (error, response, body) => {
    console.log("error:", error)
    console.log("status code:", response && response.statusCode)
    console.log("body:", body)
    console.log(response.socket[Symbol(bytesRead)])
  })
}

fetcher(url)