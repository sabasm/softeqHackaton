import axios from 'axios'
const udsDevPortalAuth = axios.create({
  baseURL:
    'http://localhost:4200/auth/realms/softeqhackathon/protocol/openid-connect/auth?client_id=SOMERealm&redirect_uri=https://anyuri.lenovo.com&state=1d83024b-e60c-44bv-3d96-1d81ddc4fe1o&response_mode=fragment&response_type=code&scope=openid&nonce=ec823ds3-33eh-4f16-ba04-0e335dda32f&kc_locale=en',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // Connection: 'keep-alive'
  }
})

const loginPage = async () => {
  let res
  try {
    res = await udsDevPortalAuth.get()
  } catch (error) {
    console.log(error)
  }
  console.log(res)
}

// const userPassword = async () => {
//   let response
//   try {
//     response = udsDevPortalAuth
//       .post('', {
//         grant_type: 'password',
//         username: 'sabas.mendivil@softeq.com',
//         password: 'L3n0v0$abas',
//         client_id: 'softeqhackathon'
//       })
//       .then(res => res.data)
//   } catch (error) {
//     console.log(error)
//     response = { error: 'Error on udsDevPortalAuth server' }
//   }
//   return response
// }

export { loginPage }
