require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
var convert = require("xml-to-json-promise");
const port = process.env.PORT;

app.use(express.static(path.join("build")));

app.get("/api/images/:project", (req, res) => {
  const project = req.params.project;
  const queryParams = {
    params: {
      prefix: `projects/${project}/gallery`
    }
  };

  axios
    .get("https://kjmporfolio.nyc3.digitaloceanspaces.com/", queryParams)
    .then(({ data }) => res.json(data));
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
