import React, { Component } from 'react'
import form_data from './components/form_data/form_data.json' 
import form_data_best from './components/form_data/form_data_best.json'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import * as Survey from 'survey-react'
import 'survey-react/survey.css'

export class SurveyPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstField : ''
        }

        this.json = form_data_best

        /*
        this.new_form = form_data.map((data) =>{
            return (
                <Row>
                    <Col>
                        <Form.Group controlId={data.controlId} >
                            <Form.Label>{data.question}</Form.Label>
                            <Form.Control type= {data.type} id={data.id} placeholder= {this.state[data.id]}/>
                        </Form.Group>
                    </Col>
                </Row>               
            )
        })
        */
    }

    handleChange(event){
        this.setState({
            firstField : event.target.value
        })
    }
    
    render() {
        var model = new Survey.Model(this.json);
        return (
            <Survey.Survey model={model} onComplete={this.onComplete}/>
            /*
            <Container mr-auto>
                    {this.new_form}
            </Container>
            */
        )
    }
}

export default SurveyPage
