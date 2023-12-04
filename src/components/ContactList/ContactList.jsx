const { Component } = require('react');

export class ContactList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map(contact => (
            <li style={{ color: 'pink' }} key={contact.id} id={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
