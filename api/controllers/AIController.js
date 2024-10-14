const fs = require("fs");
const axios = require("axios");
const { Collectors } = require("../models");
const { Op } = require("sequelize");
const { AskGPT4 } = require("../gpt/Helpers");

const predictCollectionCenters = async (req, res) => {
  //   create file stream
  const fileBuffer = fs.readFileSync(req.file.path);

  const config = {
    method: "post",
    url: "https://kunuvision-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/f9d5feeb-5a64-4f1e-a9da-67521a25ec23/classify/iterations/Iteration2/image",
    headers: {
      "Prediction-Key": "279c99ac24f84eb199d502c574cd2863",
      "Content-Type": "application/octet-stream",
    },
    data: fileBuffer,
  };

  const response = await axios(config);

  const prediction = response.data.predictions[0].tagName;

  //   find 5 nearest collection centers
  const centers = await Collectors.findAll({
    where: {
      waste_types: {
        [Op.substring]: prediction,
      },
    },
    limit: 5,
  });

  const chat = await AskGPT4(
    `I s a ${prediction} waste, give me a list of stpes to  dispose it`,
    centers.map((center) => center.name)
  );

  //   console.log(chat);

  res.json({
    status: "success",
    message: "Prediction successful",
    data: {
      prediction: response.data.predictions[0].tagName,
      centers,
      wasted_disposal_steps: JSON.parse(chat.content),
    },
  });
  console.log(response.data.predictions[0].tagName);
};

module.exports = { predictCollectionCenters };
