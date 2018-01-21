import {connect} from "react-redux";
import Contact from "../components/Contact.js";
import {getContact} from "../actions";

function mapStateToProps(state) {
  return {
    name: state.contact.name,
    occupation: state.contact.occupation,
    avatar: state.contact.avatar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: function(id) {
      dispatch(getContact(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
