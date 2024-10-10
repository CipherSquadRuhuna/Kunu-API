const https = require("https");

function sendMessageToTelegram(textMessage) {
  const botToken = "8160674746:AAGxRMv5WQ0zcivpZwjewNyjdGsHu-B5vIc";
  const channelId = "-1002469478760";

  const data = JSON.stringify({
    chat_id: channelId,
    text: textMessage,
  });

  const options = {
    hostname: "api.telegram.org",
    port: 443,
    path: `/bot${botToken}/sendMessage`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const req = https.request(options, (res) => {
    let response = "";
    res.on("data", (chunk) => {
      response += chunk;
    });

    res.on("end", () => {
      console.log("Message sent successfully:", response);
    });
  });

  req.on("error", (e) => {
    console.error("Error sending message:", e);
  });

  req.write(data);
  req.end();
}

module.exports = sendMessageToTelegram;
