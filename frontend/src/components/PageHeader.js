import { Layout, Row, Col, Button } from 'antd'
import Favorites from './Favorites'
import Register from './Register'
import Login from './Login'
import React from 'react'


const { Header } = Layout


function PageHeader({ loggedIn, signoutOnClick, signinOnSuccess, favoriteItems }) {
  return (
    <Header>
      <Row justify='space-between'>
        <h1 style={{ color: "#00ffff", margin: 0,   textShadow:`
            0 0 3px #00ffff,
            0 0 6px #00ffff,
            0 0 10px #0ff
            ` 
            }}>StreamScout</h1>
        <Col>
          {loggedIn && <Favorites favoriteItems={favoriteItems} />}
        </Col>
        <Col>
          {loggedIn && <Button shape="round" onClick={signoutOnClick}>Logout</Button>}
          {!loggedIn && (
            <>
              <Login onSuccess={signinOnSuccess} />
              <Register />
            </>
          )}
        </Col>
      </Row>
    </Header>
  )
}


export default PageHeader