import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import AcercaDe from './components/AcercaDe';
import Post from './components/Post';
import Error404 from './components/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <ContendorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} exact={true} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContendorPrincipal>
      </BrowserRouter>
  );
}

const ContendorPrincipal = styled.div`
  padding:40px;
  width:90%;
  max-width:700px;

`;

const Main = styled.main`
background: #fff;
padding:40px;
border-radius:10px;
box-shadow:0px 0px 5px rgba(129, 129, 129, 0.1);
`
 
export default App;