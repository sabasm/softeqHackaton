import React, { Fragment, useRef, useState } from 'react'
import { RowController, Button } from '../../../Styles/commonElements'
import FileUpload from '../../FileUpload'
import { Title } from '../commonComponents'
import { Content, Form } from '../commonStyles'
import { Layouts } from '../Layouts'
import Logo from '../../../Demo Files/Team designer - Legion 7i/Logo/legion.png'
import Particles from '../../../Demo Files/Assets/Rocket League/Particles/fire-welding-sparks-png.png'
import me from '../../../Demo Files/Assets/Rocket League/pics/Me-bg.png'
import RlBg from '../../../Demo Files/Assets/Rocket League/Background/RlBg.png'
import { Review } from '../Review'

export const Home = () => {
  const shoutRef = useRef(null)
  const formData = new FormData()
  const [deployed, setDeployed] = useState(false)
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    hashtags: [],
    url: '',
    footer: '',
    assets: {}
  })

  let cb = bool => {
    setDeployed(bool)
  }

  let sources = [
    { src: RlBg, x: 0, y: 0 },
    { src: Particles, x: 0, y: -1000 },
    { src: me, x: 1380, y: 350 },
    { src: Logo, x: 1380, y: 200 }
  ]

  const nextStep = () => {
    setDeployed(false)
    setStep(step + 1)
  }
  const goHome = () => {
    setStep(1)
    setData({
      title: '',
      shortDescription: '',
      description: '',
      hashtags: [],
      url: '',
      footer: '',
      assets: {}
    })
  }

  // const shout = () => {
  //   discord_sendPayload(imageBlob, obj, data, cb)
  //   nextStep()
  // }

  return (
    <Content>
      <Title>Shout to the world!</Title>
      {(() => {
        switch (step) {
          case 1:
            return (
              <ShoutForm data={data} setData={setData} formData={formData} />
            )
          // return <span>1</span>
          case 2:
            return (
              <Layouts
                ref={shoutRef}
                creating={true}
                srcs={sources}
                assets={data.assets}
                formData={formData}
                data={data}
                cb={cb}
                nextStep={nextStep}
              />
            )
          case 3:
            return <Review done={deployed} />
          default:
            return null
        }
      })()}

      <RowController>
        {step === 1 && <Button onClick={nextStep}>Next</Button>}
        {step === 2 && (
          <Fragment>
            <Button onClick={() => setStep(step - 1)}>Previous</Button>
            {/* <Button onClick={shout} style={{ backgroundColor: 'peru' }}> */}
            <Button
              onClick={() => shoutRef.current.triggerShout()}
              style={{ backgroundColor: 'peru' }}
            >
              Shout!
            </Button>
          </Fragment>
        )}
        {step >= 3 && <Button onClick={goHome}>Home</Button>}
      </RowController>
    </Content>
  )
}

const ShoutForm = ({ setData, data, formData }) => {
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <Form>
      <div className='elementsWrapper'>
        <label>
          <span>Title</span>
          <input
            type='text'
            onChange={handleChange}
            value={data.title}
            name='title'
          />
        </label>
        <label>
          <span>Url</span>
          <input
            type='text'
            onChange={handleChange}
            value={data.url}
            name='url'
          />
        </label>

        <label>
          <span>Short description</span>
          <textarea
            onChange={handleChange}
            value={data.shortDescription}
            name='shortDescription'
          />
        </label>

        <label>
          <span>Description</span>
          <textarea
            onChange={handleChange}
            name='description'
            value={data.description}
          />
        </label>
        <label>
          <span>Footer</span>
          <textarea onChange={handleChange} name='footer' value={data.footer} />
        </label>
      </div>

      <div className='elementsWrapper lastElement'>
        <label>
          <span>Assets</span>
          <FileUpload
            formData={formData}
            data={data}
            setData={setData}
          ></FileUpload>
        </label>
      </div>
    </Form>
  )
}
