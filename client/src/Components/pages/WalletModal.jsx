import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../styles/Walletdetails.css'

function WalletModal({show , onHide ,wallet}) {

  return (
    <Modal className="customwallet-modal" show={show} onHide={onHide}>
    <Modal.Header>
      <Modal.Title>Wallet  Details</Modal.Title>
    </Modal.Header>
    <Modal.Body className='wallet-body'>
        <h4>&#x20B9; {wallet}</h4>
    </Modal.Body>
    <Modal.Footer className='wallet-footer'>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default WalletModal
