const express = require("express");
const chalk = require("chalk");
const path = require("path");
const hbs = require("hbs");

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
       labNumber: "{{labNumber}}",
       labPassword: "{{labPassword}}",
       passwordPresent: "{{passwordPresent}}"
   });
});

app.get("/*", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT, () => {
    console.log();
    console.log(chalk.green("The server is listening on port: " + process.env.PORT));
    console.log();
});