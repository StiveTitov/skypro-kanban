import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Wrapper from './components/warpper/Wrapper.jsx';
import PopExit from './components/pop/PopExit.jsx';
import PopNewCard from './components/pop/PopNewCard.jsx';
import PopBrowse from './components/pop/PopBrowse.jsx';

import Header from './components/header/Header.jsx';

import Main from './components/Main/Main';



export const tasks=[
{
id: 0,
theme:"Web Design",
color:"orange",
title:"Название задачи",
date: "30.10.23"
},
{
id: 1,
theme:"Research",
color:"green",
title:"Название задачи",
date: "30.10.23"
},
{
  id: 2,
  theme:"Web Design",
  color:"orange",
  title:"Название задачи",
  date: "30.10.23"
  },
{
id: 3,
theme:"Copywriting",
color:"purple",
title:"Название задачи",
date: "30.10.23"
},
{
  id: 4,
  theme:"Research",
  color:"green",
  title:"Название задачи",
  date: "30.10.23"
  },
];

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
