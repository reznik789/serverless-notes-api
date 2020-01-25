import AWS from "aws-sdk";

export function call(action, params) {
  AWS.config.update({ region: "eu-central-1" });
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}
