// App.tsx
import React, { useState } from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import clickCount from './components/clickCount';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCounter />
    </div>
  )
}

export default App
