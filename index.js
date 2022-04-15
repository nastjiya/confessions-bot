import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
	console.log('The boy is ready')
})

client.on('messageCreate', (message) => {
	const args = message.content.split(" ").slice(1);

	if (args != null && args != '' && message.content.startsWith('?c')) {
		console.log('yay')
		message.delete()
		var saytext = args.join(" ");
    	message.channel.send(saytext)
	}

	else if (message.content === '?god') {
		message.reply({
			content: 'Who is god you ask? Well the creator of this wonderful bot, of course!',
		})
	}

	else if (message.content.startsWith('?')) {
		console.log('oh')
		message.reply({
			content: "Something is wrong here ... did you confess anything?",
		})

	}

})

client.login(process.env.TOKEN)
