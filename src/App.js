import React from 'react';
import { Avatar } from '@material-ui/core';
import { Button, Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Follow() {
  return (
    <Media className='profileBr'>
      <Avatar style={{ height: '75px', width: '75px', marginRight: '25px' }}>A</Avatar>
      <Media.Body style={{ paddingRight: '100px' }}>
        <h3>WRITTEN BY</h3>
        <h2>Ryan Holiday</h2>
        <p>
          Bestselling author of 'Conspiracy', 'Ego is the enemy' & 'The obstacle Is The Way'
          http://amzn.to/24qKRWR
            </p>
      </Media.Body>
      <Button variant="outline-success" size="sm" style={{ marginTop: 'auto', marginBottom: 'auto' }}>Follow</Button>
    </Media>
  );
}

export default Follow;
