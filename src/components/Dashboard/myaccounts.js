import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import {connect} from "react-redux"
// reactstrap components
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Button} from "@material-ui/core"
import {
  
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
         
          <section className="section section-lg ">
           
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                  
                    <span className="text-info">Your Accounts</span>
                  </h1>
                </Col>
              </Row>
              <Row style={{marginTop:80}}>
                <Col md="4">
                  <Card className="card-coin card-plain" onClick={()=>this.props.setpage("accountd")}>
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h2 className="text-uppercase ff">Coin Account</h2>
                          <span>Iban: TR5295231316</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                        <ListGroupItem className="ff">MERT YİGİT</ListGroupItem>
                          <ListGroupItem className="ff">Amount : 2 Coin</ListGroupItem>
                          <ListGroupItem className="ff">  Accounttype: Drawing Account</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        More Details
                      </Button>
                    </CardFooter>



                  </Card>
        
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>

             
                        <Col className="text-center" md="12">
                          <h2 className="text-uppercase ff" >Dolar Account</h2>
                          <span className="ff">Iban: TR2195101302</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem className="ff">MERT YİGİT</ListGroupItem>
                          <ListGroupItem className="ff">Amount : 1200 dolar</ListGroupItem>
                          <ListGroupItem className="ff"> Accounttype: Drawing Account </ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        <h4 className="ffc">More details</h4>
                      </Button>
                    </CardFooter>
                  </Card>

       
                </Col>
                
{

    this.props.account&&(
<Col md="4">
                  <Card className="card-coin card-plain" onClick={()=>this.props.setpage("accountd")}>
                    <CardHeader>
                    <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h2 className="text-uppercase ff">Dolar Account</h2>
                          <span>Iban : TR1915101001</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                        <ListGroupItem className="ff">MERT YİGİT</ListGroupItem>
    <ListGroupItem className="ff">Amount : {this.props.transfer} dolar</ListGroupItem>
                          <ListGroupItem className="ff"> Accounttype: Drawing Account </ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        More Details
                      </Button>
                      


                    </CardFooter>
                  </Card>
                 
                

                </Col>


    )
}



              </Row>
<div style={{display:"flex",justifyContent:"center",width:"100%"}}>
              <Button variant="contained" color="secondary" style={{textTransform:"none",marginTop:50}} onClick={()=>this.props.setpage("open")}> Open New Account</Button>
     
              </div>
            </Container>
          </section>
        
      </>
    );
  }
}


const statetoprops=state=>({
    transfer:state.transfer.transfer,
    account:state.account.account
})

export default connect(statetoprops)(LandingPage);
