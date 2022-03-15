import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { RowController, Button } from '../../../Styles/commonElements'
import PreviewMenu from '../../PreviewMenu'
import { Title } from '../commonComponents'
import { Content, Preview, PreviewContainer } from '../commonStyles'
import { AccountsTable } from '../Accounts/styled'
let image
let imageBlob
let obj
export const Review = ({ done }) => {
  const [deployed, setDeployed] = React.useState(done)

  useLayoutEffect(() => {
    console.log('done on loading = ', done)
    if (done) {
      setDeployed(true)
    }
  }, [done])

  return (
    <Content>
      <AccountsTable className='elementsWrapper lastElement'>
        <thead>
          <tr>
            <th>Network</th>
            <th>Username</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Discord</td>
            <td>LegionHorde_TTV</td>
            <td style={deployed ? { background:'green' } : {backgroundColor:'peru'}}>
              {deployed ? 'Shouted!' : 'uploading...'}
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
