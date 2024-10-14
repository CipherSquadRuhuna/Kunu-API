const { client_gpt4 } = require("./clients");
const { GPT4_DEPLOY_ID } = process.env;

const AskGPT4 = async (message, companies) => {
  console.log(message);
  try {
    const result = await client_gpt4.getChatCompletions(GPT4_DEPLOY_ID, [
      {
        role: "system",
        content: `You are expert at wastage management, 
        suggest me some ways to manage given wastage, also consider 
        the collectors given below and incoperate those data for the answer as well, 
        don't use markdown instead use only text.
        
        companies:  ${companies.join(", ")}
        
        --
        Here are the stpes..
        
        `,
      },
      {
        role: "user",
        content: message,
      },
    ]);
    console.log(result.choices[0].message);
    return result.choices[0].message;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AskGPT4 };
