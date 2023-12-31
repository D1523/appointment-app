import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {RiDeleteBin5Line} from "react-icons/ri"

const AppointmentList = ({apps, setApps}) => {
  console.log(apps)
  const handleDelete=(id)=>{
    setApps(apps.filter((item)=>item.id !==id))

  }
    return (
    <Container className="p-2">
        <h3 className="display-6 mb-2" style={{color:"rgb(166, 18, 189)"}}>
            Appointment List

        </h3>
        {apps.length<1 && <img src="./appointment.jpg" width="70%"/>}
        {apps.map(({id, patient, consulted, doctor, day})=>(
             <div key={id} className={consulted ? "appointments consulted" :"appointments"}>
             <Row>
              <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
              </Col>
              <Col>{day}</Col>
              <Col><RiDeleteBin5Line className="text-danger fs-1"
              type="button"
              onClick={()=>handleDelete(id)}/>
              </Col>
              </Row> 
          </div>
        ))}
       

    </Container>
)}

export default AppointmentList