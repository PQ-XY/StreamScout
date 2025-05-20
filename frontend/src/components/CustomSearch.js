import React, { useState } from "react"
import { searchGameByName } from '../utils'
import { message, Button, Modal, Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';


function CustomSearch({ onSuccess }) {
  const [displayModal, setDisplayModal] = useState(false)


  const handleCancel = () => {
    setDisplayModal(false)
  }


  const searchOnClick = () => {
    setDisplayModal(true)
  }


const onSubmit = (data) => {
  console.log("Submitting search with:", data)
  searchGameByName(data.game_name)
    .then((data) => {
      console.log("Search result:", data)
      setDisplayModal(false)
      onSuccess(data)
    })
    .catch((err) => {
      console.error("Error:", err)
      message.error(err.message || 'Search failed')
    })
}


  return (
    <>
      <Button shape="round"
        onClick={searchOnClick}
        icon={<SearchOutlined />}
        style={{ marginLeft: '20px', marginTop: '20px', width:250}}>
        Custom Search
      </Button>
      <Modal
        title="Search"
        visible={displayModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="custom_search"
          onFinish={onSubmit}
        >
          <Form.Item
            name="game_name"
            rules={[{ required: true, message: 'Please enter a game name' }]}
          >
            <Input placeholder="Game name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{color:"#1e1e2f", fontWeight:600}} htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )


}


export default CustomSearch