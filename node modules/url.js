const url= require('url')

const address = "https://192.168.5.1:8090/httpclient.html?"

const parsedAddress =url.parse(address, true)

console.log(parsedAddress)

console.log("HostName: ", parsedAddress.hostname)

console.log("PortNumber: ", parsedAddress.port)

console.log("PathName: ", parsedAddress.pathname)

const {name, age} =parsedAddress.query

console.log("Parameter: ", parsedAddress.query.name)

console.log("Name: ", name)

console.log("Age: ", age)