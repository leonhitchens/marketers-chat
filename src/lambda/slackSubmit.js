import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();


export async function handler(event, context, callback){
  const payload = JSON.parse(event.body);
  const email = payload.params.email;
  const SLACK_TOKEN = process.env.SLACK_TOKEN;

  if(!email){
    callback(null, {
      statusCode: 422,
      body: JSON.stringify({
        message: 'No email bruh'
      })
    })
  } else {
    const SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';
    const toSlack = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;
    axios.get(`${SLACK_INVITE_ENDPOINT}?${toSlack}`)
    .then((response) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: response
        })
      });
    })
  }
}