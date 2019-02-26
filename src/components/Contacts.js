import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // Add state
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "kwilliams@gmail.com",
        phone: "555-666-5555"
      },
      {
        id: 3,
        name: "Hendry Man",
        email: "hman@gmail.com",
        phone: "555-555-7777"
      }
    ]
  };

  render() {
    // de structure
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
