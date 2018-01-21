import React, {Component} from "react";

class Contact extends Component {

  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.getContact(contactId);
  }

  render(){
    return(
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Occupation: {this.props.occupation}</h3>
        <p>Avatar: {this.props.avatar}</p>
      </div>
    )
  }
}

export default Contact;
