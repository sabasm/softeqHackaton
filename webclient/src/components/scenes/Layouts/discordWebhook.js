const { Client, Intents, MessageEmbed, WebhookClient } = require('discord.js')

let discordWH =
  'https://discord.com/api/webhooks/953178279546871869/6yKSL_lBaL9AGhujSK0-Jr6BxnRAnCe09Fe0joULi4FFVjdqJXRpdSq89ipLAcQQ0gHU'

let webhookId = '953178279546871869'
let webhookToken =
  '6yKSL_lBaL9AGhujSK0-Jr6BxnRAnCe09Fe0joULi4FFVjdqJXRpdSq89ipLAcQQ0gHU'

function discord_sendMessage () {
  const request = new XMLHttpRequest()
  request.open('POST', discordWH)

  request.setRequestHeader('Content-type', 'application/json')

  const params = {
    username: 'LetsPlay',
    avatar_url: '',
    content: 'The message to send'
  }

  request.send(JSON.stringify(params))
}

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken })

const embed = new MessageEmbed().setTitle('Some Title').setColor('#0099ff')

webhookClient.send({
  content: 'Webhook test',
  username: 'some-username',
  avatarURL: 'https://i.imgur.com/AfFp7pu.png',
  embeds: [embed]
})

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', async () => {
  const channel = client.channels.cache.get('123456789012345678')
  try {
    const webhooks = await channel.fetchWebhooks()
    const webhook = webhooks.find(wh => wh.token)

    if (!webhook) {
      return console.log('No webhook was found that I can use!')
    }

    await webhook.send({
      content: 'Webhook test',
      username: 'some-username',
      avatarURL: 'https://i.imgur.com/AfFp7pu.png',
      embeds: [embed]
    })
  } catch (error) {
    console.error('Error trying to send a message: ', error)
  }
})

client.login(webhookToken)

export { discord_sendMessage }
