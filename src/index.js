const express = require("express");
const chalk = require("chalk");
const path = require("path");
const hbs = require("hbs");
const fs = require("fs");

const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();

app.use(express.json());

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
   res.render("index", {
       fileName: "{{fileName}}"
   });
});

app.get("/download/programming/count", async (req, res) => {
    try {
        const items = await new Promise((resolve, reject) => {
            fs.readdir(path.join(__dirname, "../downloadFiles/programming"), (err, items) => {
                if (err) {
                    reject();
                }

                resolve(items);
            });
        });

        const itemsWithoutExtensions = items.map(item => item.split(".")[0]);

        res.send(itemsWithoutExtensions);
    } catch (e) {
        res.status(500).send();
    }
});



app.get("/download/programming/*", async (req, res) => {
    try {
        const labName = req._parsedOriginalUrl.path.split("/")[3];

        const items = await new Promise((resolve, reject) => {
            fs.readdir(path.join(__dirname, "../downloadFiles/programming"), (err, items) => {
                if (err) {
                    reject();
                }

                resolve(items);
            });
        });

        const filteredItems = items.filter(item => item.split(".")[0] === labName);

        if (filteredItems.length !== 1) {
            return res.status(404).send("The file you are looking for was not found.");
        }

        res.download(path.join(__dirname, "../downloadFiles/programming", filteredItems[0]));
    } catch (e) {
        res.status(500).send();
    }
});

app.get("/*", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT, () => {
    console.log();
    console.log(chalk.green("The server is listening on port: " + process.env.PORT));
    console.log();
});