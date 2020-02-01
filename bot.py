# Work with Python 3.6
import discord

TOKEN = ''


client = discord.Client()


global isMemberJoined
isMemberJoined = False


@client.event
async def on_member_join(member):
	print("A user joined")
	global isMemberJoined
	isMemberJoined = True


@client.event
async def on_message(message):



	userMassage = ''
	if message.author == client.user:
		return

	
	username = str(message.author)

	joinMessage = ''
	
	global isMemberJoined
	if isMemberJoined == True:
		joinMessage = 'A user name: ' + username[0:int(len(username)-5)]  + ' joined the server!'
		isMemberJoined = False
		await message.channel.send(joinMessage, tts = True, delete_after = 5.0)
		return 



	userMassage += username[0:int(len(username)-5)] + ' said: ' + message.content
	await message.channel.send(userMassage, tts = True, delete_after = 5.0)




@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run(TOKEN)