import React from "react";
import './ContactItem.css';

const ContactItem = ({ dynamicId, contact, onRemove }) => {
    const { name, username, phone } = contact;

    return (
        <tr>
            <td>{dynamicId}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{phone}</td>
            <td>
                <button className="btn-remove" onClick={() => onRemove(contact.id)}>Remove</button>
            </td>
        </tr>
    );
};

export default ContactItem;
