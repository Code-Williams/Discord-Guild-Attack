# Guild Deleter Discord.JS V12 (Self Bot)

This bot can do:

> Delete All Roles
> Delete All Channels
> Ban All Members
> Create UnLimited Channels (Discord Channel Limit : 500 channels in a guild)

For run this just open **config.json** file and replace your self token to **USER_TOKEN** and run **run.bat**. Now you can use this script

All bot commands are available for all users but if you want to limit commands to a user that's just with a line code inside **message event**
```javascript
if(message.author.id !== "YOUR_USER_ID") return;
```