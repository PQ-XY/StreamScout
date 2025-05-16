import React, { useState } from 'react'
import MenuItem from './MenuItem';
import { Menu, Button, Drawer } from 'antd';
import { EyeOutlined, YoutubeOutlined, VideoCameraOutlined, StarFilled } from '@ant-design/icons';

import './Favorites.css'

const { SubMenu } = Menu


function Favorites({ favoriteItems }) {
  const [displayDrawer, setDisplayDrawer] = useState(false)
  const { VIDEO, STREAM, CLIP } = favoriteItems;


  const onDrawerClose = () => {
    setDisplayDrawer(false)
  }


  const onFavoriteClick = () => {
    setDisplayDrawer(true)
  }


  return (
    <>
      <Button shape="round" onClick={onFavoriteClick} icon={<StarFilled style={{ color: '#00ffff' }}/>}>
        My Favorites
      </Button>
      <Drawer
        title="My Favorites"
        placement="right"
        width={720}
        visible={displayDrawer}
        onClose={onDrawerClose}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={['streams']}
          style={{ height: '100%', borderRight: 0, backgroundColor: 'white', color:"#1e1e2f"}}
          selectable={false}
        >
          <SubMenu className="custom-submenu" key={'streams'} icon={<EyeOutlined className="submenu-icon" />} title="Streams" style={{backgroundColor: 'white'}}>
            <MenuItem items={STREAM}/>
          </SubMenu>
          <SubMenu className="custom-submenu" key={'videos'} icon={<YoutubeOutlined className="submenu-icon" />} title="Videos" style={{backgroundColor: 'white', color:"#1e1e2f"}}>
            <MenuItem items={VIDEO} />
          </SubMenu>
          <SubMenu className="custom-submenu" key={'clips'} icon={<VideoCameraOutlined className="submenu-icon" />} title={<span className="submenu-title">Clips</span>}>
            <MenuItem items={CLIP} />
          </SubMenu>
        </Menu>
      </Drawer>
    </>
  )
}


export default Favorites