const axios = require("axios")
const instance = axios.create({
    baseURL: "https://interview-plus.onrender.com"
})
module.exports.token=""
module.exports = instance