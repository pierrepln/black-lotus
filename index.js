const Discord = require("discord.js");
const bot = new Discord.Client();

const help = `
Yo gangster, tu viens de yoink un lotus a un autochtone? Alors dis moi où c'était! Écris:
\`/bs\`  Burning Steppes
\`/epl\`  Eastern Plaguelands
\`/ws\`  Winterspring
\`/sili\`  Silithus

T'es le meilleur
`;

bot.on("ready", () => {
  console.log("ready");
});

bot.on("message", (message) => {
  let now, min, max;

  const formatTimer = (x, y) =>
    (x < 10 ? "0" + x : x) + ":" + (y < 10 ? "0" + y : y);

  const getTimer = () => {
    now = new Date();
    return formatTimer(now.getHours(), now.getMinutes());
  };

  const getRepop = () => {
    min = new Date(0, 0, 0, now.getHours(), now.getMinutes() + 15);
    max = new Date(0, 0, 0, now.getHours(), now.getMinutes() + 45);
    return (
      formatTimer(min.getHours(), min.getMinutes()) +
      " - " +
      formatTimer(max.getHours(), max.getMinutes())
    );
  };

  const timerMessageBS = `\`\`\`css
[Burning Steppes]
[${getTimer()}  repop  ${getRepop()}]
\`\`\``;
  const timerMessageEPL = `\`\`\`fix
Eastern Plaguelands
${getTimer()}  repop  ${getRepop()}
\`\`\``;
  const timerMessageSIL = `\`\`\`bash
"Silithus"
"${getTimer()}  repop  ${getRepop()}" 
\`\`\``;
  const timerMessageWS = `\`\`\`ini
[Winterspring]
[${getTimer()}  repop  ${getRepop()}]
\`\`\``;

  if (message.content === "/lotus") {
    message.reply(help);
  }
  if (message.content === "/bs") {
    message.reply(timerMessageBS);
    message.delete();
  }
  if (message.content === "/epl") {
    message.reply(timerMessageEPL);
    message.delete();
  }
  if (message.content === "/ws") {
    message.reply(timerMessageWS);
    message.delete();
  }
  if (message.content === "/sili") {
    message.reply(timerMessageSIL);
    message.delete();
  }
});

bot.login(process.env.DISCORD_KEY);
