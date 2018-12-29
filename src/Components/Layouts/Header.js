/**
 * Module dependencies
 */
import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import './style.css'

class Header extends Component {

    /**
     * render method renders the HTML to the Virtual DOM of react
     *
     * @method render
     */

    render() {
        return (
            <div className="root">
            <AppBar position="static">
                <Toolbar>
                <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="headline" color="inherit" className="grow">
                    Login App
                </Typography>
                <Link to="/login" className="link-decoration">
                    <Button color="inherit">Login</Button>
                </Link>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default Header;