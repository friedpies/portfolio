require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
var xmlConvert = require("xml-js");
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
    .then(({ data }) => {
      const convertedData = JSON.parse(
        xmlConvert.xml2json(data, {
          compact: true,
          spaces: 4
        })
      );
      const contents = convertedData.ListBucketResult.Contents;
      const files = contents.map(element => {
        return element["Key"]["_text"];
      });
      res.json(files);
    });
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
