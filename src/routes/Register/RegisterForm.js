import React, { Component } from 'react';
import PT from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

class RegisterForm extends Component {
  static propTypes = {
    errors: PT.object,
    mobileNo: PT.string,
    password: PT.string,
    firstName: PT.string,
    register: PT.func,
    onChangeHandle: PT.func,
  };

  static defaultProps = {
    errors: {},
    mobileNo: '',
    password: '',
    firstName: '',
    register: () => {},
    onChangeHandle: () => {},
  };

  onChangeHandle(e, value) {
    this.props.onChangeHandle({ [e.target.name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const { mobileNo, password, firstName } = this.props;
    this.props.register({ mobileNo, password, firstName });
  }

  render() {
    const { errors, mobileNo, password, firstName } = this.props;
    const error_message =
      errors.firstName ||
      errors.mobileNo ||
      errors.password ||
      errors.message ||
      false;

    return (
      <form>
        <h2>Register</h2>
        <hr />
        <TextField
          name="firstName"
          hintText="First Name"
          floatingLabelText="First Name"
          fullWidth={true}
          value={firstName}
          onChange={::this.onChangeHandle}
        />
        <TextField
          name="mobileNo"
          hintText="Mobile No"
          floatingLabelText="Unique mobile no"
          fullWidth={true}
          value={mobileNo}
          onChange={::this.onChangeHandle}
        />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          fullWidth={true}
          type="password"
          value={password}
          onChange={::this.onChangeHandle}
        />
        <div>
          <RaisedButton
            primary={true}
            style={styles.loginBtn}
            onTouchTap={::this.submit}
          >
            Register
          </RaisedButton>
        </div>
        <Snackbar
          open={!!error_message}
          message={error_message}
          autoHideDuration={2000}
        />
      </form>
    );
  }
}

export default RegisterForm;

const styles = {
  loginBtn: {
    float: 'right',
  },
};
