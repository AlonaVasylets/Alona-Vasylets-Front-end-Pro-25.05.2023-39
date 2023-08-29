import React, { Component } from "react";
import './ContactForm.css';

class ContactForm extends Component {
    state = {
        name: "",
        username: "",
        phone: "",
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: this.state.name,
            username: this.state.username,
            phone: this.state.phone,
        };
        this.props.onAdd(newContact);
        this.setState({
            name: "",
            username: "",
            phone: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                />
                <div className="btn-container">
                    <button className="btn-save" type="submit">Save</button>
                    <button className="btn-cancel" type="button" onClick={this.props.onCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
