import  React, {useState} from "react" ;
import { Button, Form, Modal } from "react-bootstrap";


function Add({addmovie}) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterUrl, setposterUrl] = useState("");
  const [rate, setrate] = useState(1);
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  handleadd = () => {
    if (title && description && posterUrl && rate )
    {
      addmovie({title,
        description,
        posterUrl,
        rate,
        id:Math.random()});
        handleClose();
    }
   }
  return (
    <>
    
      <Button variant="primary" onClick={handleShow}>
         ADDMOVIE 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> ADD  MOVIE </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
         <Form>  

   <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label> Title </Form.Label>
    <Form.Control type="text" placeholder="Enter Title " onChange={(e)=>settitle(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>description </Form.Label>
    <Form.Control type="text" placeholder="Enter description "  onChange={(e)=>setdescription(e.target.value)} /> 
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>posterUrl </Form.Label>
    <Form.Control type="text" placeholder="Enter posterUrl" onChange={(e)=>setposterUrl(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Rate </Form.Label>
    <Form.Control type="number" placeholder="Enter Rate"  onChange={(e)=>setrate(e.target.value)}/>
  </Form.Group> 
      
 

      </Form>     
        </Modal.Body>
         <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd } >
            Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
   
    </>
  );
}
 export default Add;