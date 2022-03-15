import React from 'react'
import { RowController, Button } from '../../../Styles/commonElements'
import FileUpload from '../../FileUpload'
import { Title } from '../commonComponents'
import { Content, Form } from '../commonStyles'
import { Layouts } from '../Layouts'
import Logo from '../../../Demo Files/Team designer - Legion 7i/Logo/legion.png'
import Particles from '../../../Demo Files/Assets/Rocket League/Particles/fire-welding-sparks-png.png'
import me from '../../../Demo Files/Assets/Rocket League/pics/Me-bg.png'
import RlBg from '../../../Demo Files/Assets/Rocket League/Background/RlBg.png'

export const Home = () => {
  const formData = new FormData()
  const [step, setStep] = React.useState(1)
  const [data, setData] = React.useState({
    title: '',
    shortDescription: '',
    description: '',
    hashtags: [],
    url: '',
    assets: {}
  })

  let sources = [
    { src: RlBg, x: 0, y: 0 },
    { src: Particles, x: 0, y: -1000 },
    { src: me, x: 1380, y: 350 },
    { src: Logo, x: 1380, y: 200 }
  ]

  const consoleData = () => {
    console.log(data)

  }

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
                creating={true}
                srcs={sources}
                assets={data.assets}
                formData={formData}
              />
            )
          case 3:
            return <span>Deploying posts...</span>
          default:
            return null
        }
      })()}

      <RowController>
        <Button onClick={consoleData}>print</Button>
        {step > 1 && (
          <Button onClick={() => setStep(step - 1)}>Previous</Button>
        )}
        {step < 3 && <Button onClick={() => setStep(step + 1)}>Next</Button>}
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
