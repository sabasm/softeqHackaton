import styled from 'styled-components'

const AccountsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  thead {
    font-weight: bold;
    th {
      padding: 10px;
      text-align: left;
    }
  }
  tbody {
    tr {
      td {
        padding: 10px;
        text-align: left;
      }
    }
  }
`
export { AccountsTable }
