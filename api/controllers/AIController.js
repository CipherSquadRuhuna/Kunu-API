const fs = require("fs");
const axios = require("axios");

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
  res.json({
    status: "success",
    message: "Prediction successful",
    data: {
      prediction: response.data.predictions[0].tagName,
    },
  });
  console.log(response.data.predictions[0].tagName);
};

module.exports = { predictCollectionCenters };
