import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModel({show, handleClose, apps, setApps, drName}) {
    const [name, setName]=useState("")
    const [date, setDate]=useState(new Date().toISOString().slice(0,10)) 
const handleSubmit=(e)=>{
    e.preventDefault()
    setApps([...apps,
        {
        id:apps.length+1,
        patient: name,
        date:date,
        consulted: false,
        doctor: drName,
    }])

   
    handleClose()
}
    return (
    <>
     

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
        onChange={(e)=>setName(e.target.value)}
        value={name}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date" 
        onChange={(e)=>setDate(e.target.value)}
        value={date} />
      </Form.Group>

     <div className="text-center"> 
        <Button variant="success" type="submit" className="me-3">
        Save
      </Button>
      <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          </div>
      
          
    </Form> 
            </Modal.Body>
       
      </Modal>
    </>
  );
}

export default AddModel