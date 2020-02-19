import React, {Component} from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
}
from 'reactstrap';
import {connect} from 'react-redux';
import{addItem} from '../actions/itemActions.js';

class ItemModal extends Component{
    state ={
        modal: false,
        name: ''
    }
    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});

    }
    onSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            name:this.state.name

        }
        this.props.addItem(newItem);
        this.toggle();
    }
    
    render(){
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom:"2rem"}}
                    onClick = {this.toggle}
                >
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                    
                    >
                        <ModalHeader toggle={this.toggle}>
                            Add to Shopping List
                        </ModalHeader>
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}
                            >
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="item"
                                        placeholder="add shopping item"
                                        onChange={this.onChange}
                                        >

                                    </Input>
                                    <Button
                                        color='dark'
                                        style={{marginTop:'2rem'}}
                                        block
                                    >Add Item</Button>
                                </FormGroup>

                            </Form>
                        </ModalBody>

                    </Modal>

                    Add Item
                </Button>
            </div>

        );
    }

}
const mapStateToProps = (state) =>({
    item:state.item

});
export default connect(mapStateToProps,{addItem})(ItemModal)