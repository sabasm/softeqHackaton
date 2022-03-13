import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Styles/App.css'
import {
  ContentWrapper,
  Footer,
  Header,
  Main,
  Navigation
} from './components/layout'
import { Accounts, Home, Layouts } from './components/scenes'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <ContentWrapper>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/layouts' element={<Layouts />} />
            <Route exact path='/accounts' element={<Accounts />} />
          </Routes>
        </ContentWrapper>
        <Navigation />
      </Main>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
