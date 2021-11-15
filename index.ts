import * as express from "express";
import * as path from "path"
import * as fs from "fs"

const app = express()

app.get('/', function (req, res) {
    let requestedPath = path.join(__dirname, req.path);
    if (fs.existsSync(requestedPath))
        res.sendFile(requestedPath)
    else
        res.sendFile(path.join(requestedPath, "index.html"));

})

app.listen(3000)