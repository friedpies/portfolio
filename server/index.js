require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const xmlConvert = require("xml-js");

const port = process.env.SERVER_PORT;
const SPACES_URL = process.env.SPACES_URL;

app.use(cors());
app.use(express.static(path.join("build")));

app.get("/api/images/:project", (req, res) => {
  const project = req.params.project;
  const queryParams = {
    params: {
      prefix: `projects/${project}/gallery`
    }
  };

  axios.get(SPACES_URL, queryParams).then(({ data }) => {
    const convertedData = JSON.parse(
      xmlConvert.xml2json(data, {
        compact: true,
        spaces: 4
      })
    );
    const contents = convertedData.ListBucketResult.Contents;
    const urls = [];
    for (let i = 1; i < contents.length; i++) {
      // skip first
      let url = {};
      let currentURL = SPACES_URL + contents[i]["Key"]["_text"];
      if (currentURL.includes("(1)")) {
        url.thumbnail = currentURL;
        url.original = currentURL.replace(/\(1\)/, '');
        urls.push(url);
      }
    }
    res.json(urls);
  });
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
