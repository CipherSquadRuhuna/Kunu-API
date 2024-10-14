const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// require("dotenv").config();

const {
  OPEN_AI_GTP35_ENDPOINT,
  OPEN_AI_GTP35_SECRET,
  OPEN_AI_GPT4_ENDPOINT,
  OPEN_AI_GPT4_SECRET,
  OPEN_AI_GPT4O_ENDPOINT,
  OPEN_AI_GPT4O_SECRET,
} = process.env;

const client_gpt3 = new OpenAIClient(
  OPEN_AI_GTP35_ENDPOINT,
  new AzureKeyCredential(OPEN_AI_GTP35_SECRET)
);

const client_gpt4 = new OpenAIClient(
  OPEN_AI_GPT4_ENDPOINT,
  new AzureKeyCredential(OPEN_AI_GPT4_SECRET)
);

const client_gpt4o = new OpenAIClient(
  OPEN_AI_GPT4O_ENDPOINT,
  new AzureKeyCredential(OPEN_AI_GPT4O_SECRET)
);

module.exports = { client_gpt3, client_gpt4, client_gpt4o };
