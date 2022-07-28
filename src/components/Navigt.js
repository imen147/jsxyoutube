import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Navigationbar() {
    return ( <div>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className='img' src='https://static.vecteezy.com/ti/vecteur-libre/p3/3399771-youtube-icon-editorial-vector-gratuit-vectoriel.jpg' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <img className='logo' src='https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-microphone-icon-png-image_1545444.jpg ' />

        </Navbar.Collapse>
        <img className='img' src='https://previews.123rf.com/images/butenkow/butenkow1608/butenkow160800365/61218396-cam%C3%A9ra-vid%C3%A9o-de-mod%C3%A8le-de-conception-de-logo-vector-illustration.jpg ' />
        <img className='img' src='https://cdn1.vectorstock.com/i/1000x1000/99/00/notification-icon-on-white-vector-23859900.jpg ' />
        <img className='img' src='https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ' style={ {borderRadius:'50%' } } />
      </Container>
    </Navbar>
    </div> )
}
export default Navigationbar ;