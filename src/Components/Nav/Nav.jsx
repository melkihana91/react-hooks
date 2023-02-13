import React from 'react'
import { Container , Navbar  , Button } from 'react-bootstrap'
im React, { useState } from "react"
import Heart from "react-heart"
const Nav = () => {
  return (
    <div className='NAV'>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            
              songs
          </Navbar.Brand>
        </Container>
        <label for="site-search"> name: </label>
       
     <input type="search" id="site-search" name="q"></input>

     <label for="site-search"> gener: </label>

     <input type="search" id="site-search" gener ="q"></input>

     <Button variant="warning">add song </Button>{' '}
     <Heart isActive={active} onClick={() => setActive (!active)}/>
		</Navbar>
      </div>
  );
}

export default Nav ;