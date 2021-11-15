import * as express from "express";
import * as path from "path"
import * as fs from "fs"
import * as constants from "./constants"

const app = express()

app.get('/', function (req, res) {
    let requestedPath = path.join(constants.source_folder, req.path);
    if (fs.existsSync(requestedPath))
        res.sendFile(requestedPath)
    else
        res.sendFile(path.join(requestedPath, "index.html"));

})

app.listen(3000)