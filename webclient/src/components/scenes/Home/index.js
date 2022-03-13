import React from 'react'
import { RowController, Button } from '../../../Styles/commonElements'
import { Title } from '../commonComponents'
import { Content, Form } from '../commonStyles'

export const Home = () => {
  return (
    <Content>
      <Title>Shout to the world!</Title>
      <Form>
        <div className='elementsWrapper'>
          <label>
            <span>Title</span>
            <input type='text' />
          </label>

          <label>
            <span>Short description</span>
            <textarea />
          </label>

          <label>
            <span>Description</span>
            <textarea />
          </label>

          <label>
            <span>#Hashtags</span>
            <Button>Add</Button>
            {/* <input type='text' /> */}
          </label>
        </div>

        <div className='elementsWrapper lastElement'>
          <label>
            <span>Assets</span>
            <Button>Add</Button>
          </label>
        </div>
      </Form>
      <RowController>
        <Button>Next</Button>
      </RowController>
    </Content>
  )
}
