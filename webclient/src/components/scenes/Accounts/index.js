import React from 'react'
import { RowController, Button } from '../../../Styles/commonElements'
import { Title } from '../commonComponents'
import { Content } from '../commonStyles'
import { AccountsTable } from './styled'
export const Accounts = () => {
  return (
    <Content>
      <Title>Accounts</Title>
      <AccountsTable className='elementsWrapper lastElement'>
        <thead>
          <tr>
            <th>Network</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Discord</td>
            <td>LegionHorde_TTV</td>
            <td>
              <Button style={{ backgroundColor: '#5a88eb' }}>Log out</Button>
            </td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Not connected</td>
            <td>
              <Button style={{ backgroundColor: 'green' }}>Log in</Button>
            </td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>Not connected</td>
            <td>
              <Button style={{ backgroundColor: 'green' }}>Log in</Button>
            </td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>Not connected</td>
            <td>
              <Button style={{ backgroundColor: 'green' }}>Log in</Button>
            </td>
          </tr>
        </tbody>
      </AccountsTable>
    </Content>
  )
}
