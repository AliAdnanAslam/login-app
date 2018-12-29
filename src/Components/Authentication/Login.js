/**
 * Module dependencies
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from '../Layouts/Header'
import { login } from './apiCall'

/**
 * Inline styling of whole login component
 *
 * @param {*} theme
 */

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

/**
 * Login class renders the login page and handles the related conditions for login
 *
 * @class Login
 * @constructor
 */

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  /**
   * handleLogin method calls the api and show the result
   *
   * @method handleLogin
   *
   * @param {Object} e
   *
   * @return {void}
   */

  handleLogin(e) {
    e.preventDefault();

    login(this.state)
    .then((resp) =>{
      // further processing after successful login
    })
    .catch((err)=>console.log(err));
  }

  /**
   * This method validates the email by comparing it to the regex
   *
   * @method validateEmail
   *
   * @param {Email} email
   *
   * @return {Boolean}
   */

  validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.trim())) {
      return false;
    }
    return true;
  }

  /**
   * handleChange method sets the states attributes
   *
   * @method handleChange
   *
   * @param {Object} e
   *
   * @return {void}
   */

  handleChange(e) {
    e.preventDefault();
    const formField = e.target.name;
    const data = {...this.state};
    data[formField] = e.target.value.trim();

    this.setState(() => data)
  }

  /**
   * render method renders the HTML to the Virtual DOM of react
   *
   * @method render
   */

  render() {
      const { classes } = this.props;
      const isEnable = !this.validateEmail(this.state.email);
      return (
        <div>
          <Header />
          <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={this.handleLogin}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" onChange={this.handleChange} autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" onChange={this.handleChange} autoComplete="current-password" />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                name="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isEnable}>
                Sign in
              </Button>
            </form>
            </Paper>
          </main>

        </div>
      );
  }

}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);