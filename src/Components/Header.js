import React, {Component} from 'react'

import {AppBar, Container, IconButton, Toolbar, Typography, Box} from '@material-ui/core';



import SearchIcon from '@material-ui/icons/Search';

/* import SearchBar from "material-ui-search-bar"; */

import {withStyles} from '@material-ui/core/styles';

import logo from "../image/logo.png";


import {header as styles} from '../Styles';


class Header extends Component{
    render(){
        const { classes } = this.props;

        return (

            <div className="root">

            <AppBar position="static"> 

                <Container>

                    <Toolbar>   

                    <Typography className={classes.title}> 

                        <img src={logo} className={classes.logo} alt="logo" />

                    </Typography> 



                    <Box>

                        <IconButton color="inherit" className={classes.search}>

                        <SearchIcon />

                        {/* <SearchBar
                        value={this.state.value}
                        onChange={(newValue) => this.setState({ value: newValue })}
                        onRequestSearch={() => doSomethingWith(this.state.value)}
                        /> */}

                        </IconButton>

                    </Box> 

                    </Toolbar>

                    

                </Container>

                
            </AppBar>

            </div>
        )
    }

}




export default withStyles(styles)(Header);