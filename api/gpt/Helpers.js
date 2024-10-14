const { client_gpt4 } = require("./clients");
const { GPT4_DEPLOY_ID } = process.env;

const AskGPT4 = async (message, companies) => {
  console.log(message);
  try {
    const result = await client_gpt4.getChatCompletions(GPT4_DEPLOY_ID, [
      {
        role: "system",
        content: `You are expert at wastage management, 
        suggest list ways to manage given wastage. give the answer as a list of steps. in the following JSON format:

        methods:[
          {
            method: "method1",
            description: "description of method1"
          },
          {
            method: "method2",
            description: "description of method2"
          },
          {
            method: "method3",
            description: "description of method3"
          }
        ]
        
      
        
        `,
      },
      {
        role: "user",
        content: message,
      },
    ]);

    return result.choices[0].message;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AskGPT4 };
