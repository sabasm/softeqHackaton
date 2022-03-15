// const { Client, Intents, MessageEmbed, WebhookClient } = require('discord.js')

let discordWH =
  'https://discord.com/api/webhooks/953178279546871869/6yKSL_lBaL9AGhujSK0-Jr6BxnRAnCe09Fe0joULi4FFVjdqJXRpdSq89ipLAcQQ0gHU?wait=true'

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

async function discord_sendPayload (img, obj = false, data, cb) {
  let { title, shortDescription, description, url, footer } = data

  let source = {
    title: title && title,
    description: shortDescription && shortDescription,
    url: url && url,
    footer: footer && {
      text: footer
    }
  }

  function clean (obj) {
    for (var propName in obj) {
      if (
        obj[propName] === null ||
        obj[propName] === undefined ||
        obj[propName] === ''
      ) {
        delete obj[propName]
      }
    }
    return obj
  }

  let embeds = []
  let cleanSrc = clean(source)
  for (const key in cleanSrc) {
    if (cleanSrc.hasOwnProperty(key)) {
      // a key exists at this point, for sure!
      embeds.push(cleanSrc)
      Object.assign(embeds[0], { color: 2807253 })
      break // break when found
    }
  }

  const params = {
    username: 'Bobby Tables',
    content: description,
    embeds
  }
  var myHeaders = new Headers()
  var formdata = new FormData()
  formdata.append('file', img, 'img.png')
  formdata.append('payload_json', JSON.stringify(params))
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  }
  await fetch(discordWH, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      cb(true)
    })
    .catch(error => {
      cb(false)
      console.log('error', error)
    })
}

export { discord_sendMessage, discord_sendPayload }
/**
 
// const { Client, Intents, MessageEmbed, WebhookClient } = require('discord.js')

let discordWH =
  'https://discord.com/api/webhooks/953178279546871869/6yKSL_lBaL9AGhujSK0-Jr6BxnRAnCe09Fe0joULi4FFVjdqJXRpdSq89ipLAcQQ0gHU?wait=true'

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

function discord_sendPayload (img, obj = false, data, cb) {
  let { title, shortDescription, description, url, footer } = data
  obj = {
    content: description || '',
    embeds: [
      {
        title: title || '',
        description: shortDescription || '',
        // url: url || '',
        color: 2807253,
        footer: {
          text: footer || ''
        },
        image: {
          url: url || ''
        }
      }
    ],
    username: 'Bobby Tables'
  }
  var myHeaders = new Headers()
  var formdata = new FormData()
  formdata.append('file', img, 'img.png')
  formdata.append('payload_json', JSON.stringify(obj))
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  }
  fetch(discordWH, requestOptions)
    .then(response => response.text())
    .then(result => cb(true))
    .catch(error => {
      cb(false)
      console.log('error', error)
    })
}

export { discord_sendMessage, discord_sendPayload }
//url = https://www.twitch.tv/videos/1413227156

 */
