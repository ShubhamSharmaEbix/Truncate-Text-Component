import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState, useRef } from 'react';
import TruncateText from './components/TruncateText'
import Button from 'react-bootstrap/Button'


const containerClassNameProperty ={
  name : 'containerClass',
  type : 'string',
  description : 'This property takes the class names to be applied on the component wrapping the text.',
  default : 'null'
}

const lineProperty ={
  name : 'line',
  type : 'string',
  description : 'This property takes the number of lines to show on the screen from the given text.',
  default : 0
}

const elementProperty ={
  name : 'element',
  type : 'string',
  description : 'This property takes an HTML element and wraps the given text in it.',
  default : 'null'
}

const textProperty = {
  name : 'text',
  type : 'string',
  description : 'It takes the text, that needs to be truncated.',
  default : 'null'
}


function App() {

  const [containerClassName, setContainerClassName] = useState('fw-bold');
  const [element,setElement] = useState('p')
  const [line,setLine] = useState(2);
  const [text,setText] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  const [truncateText,setTruncateText] = useState('Read More');
  const ref = useRef(null)

  const getProperties = ()=>{
    return [containerClassNameProperty, lineProperty, elementProperty, textProperty].map((property,id)=>(
      <tr key={id}>
        <td>{property.name}</td>
        <td>{property.type}</td>
        <td className='w-50'>
          <p className='text-break'>{property.description}</p>
        </td>
        <td>{property.default}</td>
      </tr>
    ))
  }

  return (
    <div className="App">
      <h1 className='col-10 mx-auto'>Custom Truncate Component</h1>
      <Row className='mx-auto col-10 my-5 flex-column'>
         <Col>
           <h3 className='border-bottom'>Property</h3>
           <Table bordered className='mt-2'>
             <thead>
               <tr>
                 <th>Property Name</th>
                 <th>Type</th>
                 <th>Description</th>
                 <th>Default</th>
               </tr>
             </thead>
             <tbody>
               {
                getProperties()
               }
             </tbody>
           </Table>
         </Col> 
         <Col className='mt-5'>
           <h3 className='border-bottom'>Demo</h3>
           <Row>
             <Col className='col-6 col-xs-12'>
               <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Element</Form.Label>
                    <Form.Control type='text' ref={ref} placeholder={element}/>
                    <Button className='mt-3' onClick={(e)=>setElement(ref.current.value)}>Change Element</Button>
                 </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ContainerClassName</Form.Label>
                    <Form.Control type='text' value={containerClassName} onChange={(e)=>setContainerClassName(e.target.value)}/>
                 </Form.Group>
                 <Form.Group className="mb-3">
                    <Form.Label>Line</Form.Label>
                    <Form.Control type='number' value={line} onChange={(e)=>setLine(e.target.value)}/>
                 </Form.Group>
                 <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as='textarea' value={text} onChange={(e)=>setText(e.target.value)}/>
                 </Form.Group>
                 <Form.Group className="mb-3">
                    <Form.Label>TruncateText</Form.Label>
                    <Form.Control type='text' value={truncateText} onChange={(e)=>setTruncateText(e.target.value)}/>
                 </Form.Group>
               </Form>
             </Col>
             <Col className='col-6 col-xs-12'>
               <p className='w-100 h-100 border text-break p-2' disabled>
                <TruncateText line={line} text={text} containerClass={containerClassName} element={element} truncateText={truncateText}/>
                </p>
             </Col>
           </Row>
         </Col>
      </Row>
    </div>
  )
}

export default App
