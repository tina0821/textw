const axios = require("axios");

const notify = async (message) => {
  const lineNotifyToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const response = await axios.post(
    "https://notify-api.line.me/api/notify",
    `message=${message}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${lineNotifyToken}`,
      },
    }
  );
  return response.data;
};

module.exports = notify;
