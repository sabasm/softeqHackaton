import React from 'react'

const FileUpload = ({ formData, data, setData }) => {
  const changeHandler = event => {
    console.log('img', event.target.name)
    let url = URL.createObjectURL(event.target.files[0])
    setData(prevState => ({
      ...prevState,
      assets: { ...prevState.assets, [event.target.name]: url }
    }))
  }

  return (
    <table
      style={{
        width: '100%',
        border: '1px solid #ccc',
        borderCollapse: 'collapse',
        marginBottom: '1rem'
      }}
    >
      <tbody
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          width: '100%',
          height: '100%',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '1rem',
          boxSizing: 'border-box'
        }}
      >
        <tr>
          <td>
            <span>background 1</span>
          </td>
          <td>
            <input type='file' name='backgroundA' onChange={changeHandler} />
          </td>
        </tr>
        <tr>
          <td>
            <span>background 2</span>
          </td>
          <td>
            <input type='file' name='backgroundB' onChange={changeHandler} />
          </td>
        </tr>
        <tr>
          <td>
            <span>Picture</span>
          </td>
          <td>
            <input type='file' name='picture' onChange={changeHandler} />
          </td>
        </tr>
        <tr>
          <td>
            <span>Logo</span>
          </td>
          <td>
            <input type='file' name='logo' onChange={changeHandler} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default FileUpload
