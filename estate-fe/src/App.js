import { util } from './utils/util';
import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavItem, Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './Home'
import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
import Web3 from "web3"
import Matic from "maticjs"

import './App.css';
import {Buffer} from 'buffer';

// var Web3 = require('web3');
Buffer.from('anything','base64');
window.Buffer = window.Buffer || require('buffer').Buffer;

async function initApp() {
}

function App() {

  const [active, setActive] = useState(1)
  const [connected, setConnected] = useState(util.isConnected() ? util.getWallet().getAccountId() : 'Login')

  useEffect(() => {
    if (util.isConnected()) {
      initApp()
    }
  }, [])

  return (
      <BrowserRouter>
        <nav className='navbar navbar-light bg-light d-flex justify-content-between'>
          <div style={{paddingLeft: '10px'}}>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggleExternalContent' aria-controls='navbarToggleExternalContent' 
              aria-expanded='true' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div style={{paddingRight: '10px'}}>
          <button className='btn btn-success' style={{color: 'white', fontFamily: 'Rubik-VariableFont_wght' }} type='button'>{connected}</button>
          </div>
        </nav>
        <div className='collapse' id='navbarToggleExternalContent' style={{width: '100%', position: 'absolute', zIndex: '2'}}>
          <div className='bg-light'>
            <div className='sl-navbar-brand-container-first'>
              <Link className='sl-navbar-brand' style={{color: 'DimGrey'}} to='/home' 
                onClick={()=>{document.getElementById('navbarToggleExternalContent').classList.remove('show')}}
                >Home</Link>
            </div>
          </div>
        </div>
        <Container fluid={true}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
