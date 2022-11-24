import React from 'react'
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import NotFound from './components/pages/NotFound';
// import React, { PureComponent } from 'react'
import { GithubProvider } from './components/context/github/GitHubContext';
import User from './components/pages/User';

function App() {
  return (

    <GithubProvider>
    <div className='d-flex flex-column justify-content-between h-100'>
    <Router>
   <Header/>

    <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path='/users/:loginname' element = {<User/>} />
        <Route path="/*" element = {<NotFound/>}/>
    </Routes>

    <Footer/>
</Router>
    
</div>

</GithubProvider>
)
}

export default App
