import React, { Component, Fragment } from 'react'
import {Card, CardTitle, CardActions, Button, CardText, CardMenu} from 'react-mdl'
import {Row, Col, Container, Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'




export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading : true,
             randPics: ''
        }
    }
    
    async componentDidMount(){
        let data = await fetch("https://picsum.photos/v2/list/")
        let images = await data.json()
        this.setState({
            loading: false,
            randPics: images
        })

    
    }
    
    render() {
        return (
      
            <Fragment>
                <Row style={{marginLeft : '6px', marginTop: '20px'}}>
                    <Col md={3}>
                        <Card shadow={0} style={ {flex : '1'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Murphey Research Survey</CardTitle>
                            <CardText>
                                Murphy Research Survey Project
                            </CardText>
                            <CardActions border>
                                <Link to="/survey">
                                    <Button colored> 
                                        Survey Project
                                    </Button>
                                </Link>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card shadow={0} style={{flex : '1'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/600) center / cover'}}>Sample Project 1</CardTitle>
                            <CardText>
                                This is another sample project
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card shadow={0} style={{flex: '1'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/670) center / cover'}}>Sample Project 2</CardTitle>
                            <CardText>
                                This is another sample project
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card shadow={0} style={{flex: '1'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/800) center / cover'}}>Sample Project 3</CardTitle>
                            <CardText>
                                This is another sample project
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                        </Card>
                    </Col>
                </Row>
                 <Row style={{marginLeft : '6px', marginTop: '20px'}}>
                 <Col md={3}>
                     <Card shadow={0} style={ {flex : '1'}}>
                         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/720) center / cover'}}>Sample Project 4</CardTitle>
                         <CardText>
                             Murphy Research Survey Project
                         </CardText>
                         <CardActions border>
                             <Link to="/survey">
                                 <Button colored> 
                                     Survey Project
                                 </Button>
                             </Link>
                         </CardActions>
                         <CardMenu style={{color: '#fff'}}>
                         </CardMenu>
                     </Card>
                 </Col>
                 <Col md={3}>
                     <Card shadow={0} style={{flex : '1'}}>
                         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/900) center / cover'}}>Sample Project 5</CardTitle>
                         <CardText>
                             This is another sample project
                         </CardText>
                         <CardActions border>
                             <Button colored>Get Started</Button>
                         </CardActions>
                         <CardMenu style={{color: '#fff'}}>
                         </CardMenu>
                     </Card>
                 </Col>
                 <Col md={3}>
                     <Card shadow={0} style={{flex: '1'}}>
                         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/580) center / cover'}}>Sample Project 6</CardTitle>
                         <CardText>
                             This is another sample project
                         </CardText>
                         <CardActions border>
                             <Button colored>Get Started</Button>
                         </CardActions>
                         <CardMenu style={{color: '#fff'}}>
                         </CardMenu>
                     </Card>
                 </Col>
                 <Col md={3}>
                     <Card shadow={0} style={{flex: '1'}}>
                         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/780) center / cover'}}>Sample Project 7</CardTitle>
                         <CardText>
                             This is another sample project
                         </CardText>
                         <CardActions border>
                             <Button colored>Get Started</Button>
                         </CardActions>
                         <CardMenu style={{color: '#fff'}}>
                         </CardMenu>
                     </Card>
                 </Col>
             </Row>
            </Fragment>
        )
    }
}

export default Home
