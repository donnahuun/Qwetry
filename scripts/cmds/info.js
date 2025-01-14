const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "hedroxyy",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "ADMIN",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const botName = "HeDroxuu 💗";
    const botPrefix = ".";
    const authorName = "HeDroxyy DaDa";
    const authorFB = "https://www.facebook.com/profile.php?id=61559819588542";
    const authorInsta = "https://www.instagram.com/hedroxyyy_?igsh=MWw5MzNydmtiN3l0OQ==";    

    const link = 'https://i.ibb.co/p4bJTXD/image.jpg'; // Directly using the provided image URL

    // Get current date and time in Asia/Kathmandu timezone
    const now = moment().tz('Asia/Kathmandu');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    // Calculate bot uptime
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}hrs: ${minutes}min: ${seconds}sec`;

    message.reply({
      body: `-----------------------------\nAUTHOR_NAME: ${authorName}\n-----------------------------\nBOT NAME: ${botName}\nBOT PREFIX: ${botPrefix}\n-----------------------------\nFACEBOOK: ${authorFB}\nINSTA: ${authorInsta}\n-----------------------------`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message });
    }
  }
};
