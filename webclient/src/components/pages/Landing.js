import React, { useEffect, useState } from 'react'
import { loginPage, userPassword } from '../../network/extAPI/udsDevPortalAuth'
import { Section, Article, Button } from './LandingStyle'

const Landing = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  const logIn = async () => {
    let res
    try {
      res = await userPassword()
      // res = await loginPage()
    } catch (error) {
      console.log(error)
    }
    console.log(res)
    setData(JSON.stringify(res))
  }

  return (
    <Section className='pageLimiter'>
      <h1>Base template for idea development</h1>
      <Article>
        <h2>login</h2>
        <Button onClick={logIn}>Log in</Button>
        {error && <span>{error}</span>}
        {data && <p>{data}</p>}
      </Article>
    </Section>
  )
}

export default Landing
