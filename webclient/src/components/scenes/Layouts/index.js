import React, { forwardRef, useImperativeHandle } from 'react'
import Resizer from 'react-image-file-resizer'
import PreviewMenu from '../../PreviewMenu'
import { Title } from '../commonComponents'
import { Content, Preview, PreviewContainer } from '../commonStyles'
import mergeImages from 'merge-images'
import background_placeholder from '../../../placeholders/background_placeholder.png'
import picture_placeholder from '../../../placeholders/picture_placeholder.png'
import logo_placeholder from '../../../placeholders/logo_placeholder.png'
import { discord_sendPayload } from './discordWebhook'

export const Layouts = forwardRef(
  ({ creating, assets, data, cb, nextStep }, ref) => {
    let image
    let imageBlob
    let obj

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

    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data)
      const byteArrays = []
      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize)
        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        byteArrays.push(byteArray)
      }

      const blob = new Blob(byteArrays, { type: contentType })
      return blob
    }

    const resizeFile = file =>
      new Promise(resolve => {
        Resizer.imageFileResizer(
          file,
          1920,
          1080,
          'WEBP',
          40,
          0,
          uri => {
            resolve(uri)
          },
          'blob'
        )
      })
    const merge = async sources => {
      image = await mergeImages(sources, {
        width: 1920,
        height: 1080
      }).then(async b64 => {
        document.querySelector('#autogen').src = b64

        let newB64 = b64.split(',')[1]
        imageBlob = b64toBlob(newB64, 'image/png')

        imageBlob = await resizeFile(imageBlob)

        obj = { content: 'Resized Image' }
      })
    }

    merge(sources)

    const shout = () => {
      discord_sendPayload(imageBlob, obj, data, cb)
      nextStep()
    }

    useImperativeHandle(ref, () => ({
      triggerShout: () => {
        return shout()
      }
    }))

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
            <button onClick={async () => await merge(predefinedSelection[1])}>
              default
            </button>
            <button onClick={async () => await merge(predefinedSelection[2])}>
              Single Picture
            </button>
            <button onClick={async () => await merge(predefinedSelection[3])}>
              Pre-season
            </button>
            <button onClick={async () => await merge(predefinedSelection[4])}>
              Legion
            </button>
          </PreviewMenu>
        </Preview>
      </Content>
    )
  }
)
