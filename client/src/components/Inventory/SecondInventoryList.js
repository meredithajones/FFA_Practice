import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import API from '../../utils/Api';

class SecondInventoryList extends Component{
    state = {
        items: [
            { id: uuid(), name: 'Bread'}, 
            { id: uuid(), name: 'Soup'},
            { id: uuid(), name: 'Kale'},
            { id: uuid(), name: 'Orange'},
        ]
    }
    
    componentDidMount(){
        console.log("HELLO")
        API.getInven()
        .then((data)=>{
            console.log("HEY", data)
        })
    }

render () {
    const { items } = this.state;
    return(
        <Container>
            <Button
            color="dark"
            style={{marginBottom: '2 rem'}}
            onClick={() => {
                const name = prompt('Add Something to the fridge');
                if(name) {
                    this.setState(state => ({
                        items: [...state.items, { id: uuid(), name}]
                    }));
                }
            }}
            >Add Item</Button>
            <ListGroup>
                <TransitionGroup classname= "inventory-list">
                  {items.map(({ id, name})=>(
                    <CSSTransition key={id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button
                            className= "remove-button"
                            color=
                            {name}
                            />
                        </ListGroupItem>
                    </CSSTransition>
                  ))}  
                </TransitionGroup>
            </ListGroup>
        </Container>
        );
    }
}

export default SecondInventoryList
