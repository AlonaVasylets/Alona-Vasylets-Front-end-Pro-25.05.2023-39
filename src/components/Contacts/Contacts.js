import React, { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactForm from "../ContactForm/ContactForm";
import './Contacts.css';

class Contacts extends Component {
    state = {
        contacts: [],
        maxId: 0,
        isFormVisible: false,
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ contacts: data });
            });
    }

    removeContact = (id) => {
        this.setState({
            contacts: this.state.contacts.filter((contact) => contact.id !== id),
        });
    };

    toggleFormVisibility = () => {
        this.setState({ isFormVisible: !this.state.isFormVisible });
    };

    addContact = (contact) => {
        const newContact = {
            id: this.state.maxId + 1,
            ...contact,
        };
        this.setState({
            contacts: [...this.state.contacts, newContact],
            maxId: this.state.maxId + 1,
        });
        this.toggleFormVisibility();
    };

    render() {
        return (
            <div className="container">
                <h1>Contacts</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact, index) => (
                            <ContactItem
                                key={contact.id}
                                contact={contact}
                                dynamicId={index + 1}
                                onRemove={this.removeContact}
                            />
                        ))}
                    </tbody>
                </table>
                <button className="btn-add" onClick={this.toggleFormVisibility}>
                    {this.state.isFormVisible ? "Fill in the fields" : "Add Contact"}
                </button>
                {this.state.isFormVisible && (
                    <ContactForm onAdd={this.addContact} onCancel={this.toggleFormVisibility} />
                )}
            </div>
        );
    }
}

export default Contacts;
