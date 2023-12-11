
import './App.css'

import Wrapper from './components/warpper/Wrapper.jsx';
import PopExit from './components/pop/PopExit.jsx';
import PopNewCard from './components/pop/PopNewCard.jsx';
import PopBrowse from './components/pop/PopBrowse.jsx';

import Header from './components/header/Header.jsx';

import Main from './components/Main/Main';





function App() {
  

  return (
    <>
  
  <Wrapper>
    
      <PopExit />
    
      <PopNewCard />
        
      <PopBrowse />
    
    
      <Header />

      <Main />

  </Wrapper>
    
  

</>

  )
}

export default App
