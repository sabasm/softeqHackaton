import React, { useEffect, useState } from 'react'
import { dummyPost } from '../../network/extAPI/dumyfetch'
import { Section, Article, Button } from './LandingStyle'

const Landing = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  const shutDown = async () => {
    let res = await dummyPost()
    setData(res)
  }

  return (
    <Section className='pageLimiter'>
      <h1>Base template for idea development</h1>
      <Article>
        <h2>Warning</h2>
        <Button onClick={shutDown}>P A N I C !</Button>
        <span>
          <b>Use with caution</b>
        </span>
        {error && <span>{error}</span>}
        {data && (
          <>
            <h2>dummy fetch</h2>
            <p>{data.title}</p>
          </>
        )}
      </Article>
    </Section>
  )
}

export default Landing
