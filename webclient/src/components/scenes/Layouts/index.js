import React from 'react'
import { RowController, Button } from '../../../Styles/commonElements'
import PreviewMenu from '../../PreviewMenu'
import { Title } from '../commonComponents'
import { Content, Preview, PreviewContainer } from '../commonStyles'
import mergeImages from 'merge-images'
import background_placeholder from '../../../placeholders/background_placeholder.png'
import picture_placeholder from '../../../placeholders/picture_placeholder.png'
import logo_placeholder from '../../../placeholders/logo_placeholder.png'
let image
export const Layouts = ({ creating, assets }) => {
  console.log('assets = ', assets)
  const predefinedSelection = {
    1: [
      {
        src: (assets && assets.backgroundA) || background_placeholder,
        x: 0,
        y: 0
      },
      {
        src: (assets && assets.picture) || picture_placeholder,
        x: 250,
        y: 250
      },
      { src: (assets && assets.logo) || logo_placeholder, x: 1200, y: 300 }
    ],
    2: [
      {
        src: (assets && assets.backgroundA) || background_placeholder,
        x: 0,
        y: 0
      }
    ],
    3: [
      {
        src: (assets && assets.backgroundA) || background_placeholder,
        x: 0,
        y: 0
      },
      {
        src: (assets && assets.picture) || picture_placeholder,
        x: 150,
        y: 250
      },
      { src: (assets && assets.logo) || logo_placeholder, x: 150, y: 800 }
    ],
    4: [
      {
        src: (assets && assets.backgroundA) || background_placeholder,
        x: 0,
        y: 0
      },
      {
        src: (assets && assets.backgroundB) || background_placeholder,
        x: 0,
        y: 0
      },
      {
        src: (assets && assets.picture) || picture_placeholder,
        x: 1380,
        y: 350
      },
      { src: (assets && assets.logo) || logo_placeholder, x: 1380, y: 200 }
    ]
  }

  let sources = predefinedSelection[1]

  const merge = async sources => {
    image = await mergeImages(sources, {
      width: 1920,
      height: 1080
    }).then(b64 => (document.querySelector('#autogen').src = b64))
  }

  merge(sources)
  return (
    <Content>
      {!creating && <Title>Layouts</Title>}
      <Preview className='lastElement'>
        <PreviewContainer className='elementsWrapper'>
          <div style={{ width: '100%', objectFit: 'contain' }}>
            <img
              id='autogen'
              alt='autogen'
              title='img'
              src={image}
              style={{ width: '100%', objectFit: 'contain' }}
            ></img>
          </div>
        </PreviewContainer>
        <PreviewMenu className='elementsWrapper'>
          <button onClick={() => merge(predefinedSelection[1])}>default</button>
          <button onClick={() => merge(predefinedSelection[2])}>
            Single Picture
          </button>
          <button onClick={() => merge(predefinedSelection[3])}>
            Pre-season
          </button>
          <button onClick={() => merge(predefinedSelection[4])}>Legion</button>
          {/* <button>twitter</button> */}
        </PreviewMenu>
      </Preview>
      {!creating && (
        <RowController>
          <Button>Next</Button>
        </RowController>
      )}
    </Content>
  )
}
