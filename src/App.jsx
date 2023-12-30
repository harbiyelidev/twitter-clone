import React from 'react'
import Container from './layout/container'
import Sidebar from './layout/sidebar'
import Content from './layout/content'
import Widgets from './layout/widgets'

function App() {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      <Widgets/>
    </Container>
  )
}

export default App