
const connect = require("../backend/src/configuration/db.config");
const app = require("./index.js");

app.listen(2345, async function() {
    await connect();
    console.log("port running at 2345");
})

