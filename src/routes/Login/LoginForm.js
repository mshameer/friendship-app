import React, { Component } from 'react';
import PT from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { Link } from 'react-router';

class LoginForm extends Component {
  static propTypes = {
    processing: PT.bool, // send request?
    errors: PT.object,
    mobileNo: PT.string,
    password: PT.string,
    pause: PT.bool,
    login: PT.func,
    onChangeHandle: PT.func,
  };

  static defaultProps = {
    processing: false,
    errors: {},
    mobileNo: '',
    password: '',
    pause: true,
    login: () => {},
    onChangeHandle: () => {},
  };

  constructor(props) {
    super(props);
  }

  onChangeHandle(e, value) {
    this.props.onChangeHandle({ [e.target.name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.login({
      mobileNo: this.props.mobileNo,
      password: this.props.password,
    });
  }

  render() {
    const { processing, errors, mobileNo, password, pause } = this.props;
    const error_message =
      errors.mobileNo || errors.password || errors.message || false;

    return (
      <form>
        <h2>Login</h2>
        <hr />
        <TextField
          name="mobileNo"
          hintText="E-mail"
          floatingLabelText="E-mail"
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
          <Link to="/">
            <RaisedButton
              primary={true}
              style={styles.loginBtn}
              onTouchTap={::this.submit}
            >
              Login
            </RaisedButton>
          </Link>
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

export default LoginForm;

const styles = {
  loginBtn: {
    float: 'right',
  },
};
