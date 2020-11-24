# SnowGate
![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)

SnowGate is a discord api proxy, made to allow you to centralise ratelimit handling and not having to worry about whether all your services are properly synchronizing their ratelimits.

It's built upon [SnowTransfer](https://github.com/DasWolke/SnowTransfer) which is a minimalistec rest client for the discord api.

To get started with SnowGate, you'll want to npm install this repository

## Example Usage
```js
const Gate = require("snowgate");

const gate = new Gate({ token: "Your token here", host: "localhost", port: 4096 });

gate.start().then(() => console.log(`REST server started on port ${gate.config.port}`));
```

- Token refers to the token of the bot user of your application which you can get on [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me) by going to your application
- Host refers to the host the server will listen on, you should probably reverse proxy the server so you can use nginx or similar for handling ssl, gzip, etc.
- Port refers to the port the server will listen on, make sure that this port is not used by any other application
- SnowGate Config.options is an object containing SnowTransfer options, possible values are defined [here](https://daswolke.github.io/SnowTransfer/?api=SnowTransfer)
