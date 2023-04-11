import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import Header from './components/Header/Header';
import Main from './components/Main/MainContent';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>,
)
