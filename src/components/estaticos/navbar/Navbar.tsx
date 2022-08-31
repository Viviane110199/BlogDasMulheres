import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { addToken } from '../../../store/user/actions';
import {toast} from 'react-toastify';
import './Navbar.css';

function Navbar() {

    let navigate = useNavigate();
    
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );

    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
    }

    var navbarComponent;

    if(token !== "") {
        navbarComponent = <AppBar className='nav' position="static">
        <Toolbar variant="dense">
            <Box display="flex" justifyContent="center">
                <Typography variant="h4" color="inherit" className="cursor">
                    Blog das Mulheres
                </Typography>
            </Box>

            <Box display="flex" justifyContent="center">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1}>
                        <Typography className='cursor1' variant="h5" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1}>
                    <Typography className='cursor-barra' variant="h5" color="inherit">
                        |
                    </Typography>
                </Box>

                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1}>
                        <Typography className='cursor1' variant="h5" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
            </Box>

            <Box>
                <Box mx={1} onClick={ goLogout }>
                    <Typography className='cursor2' variant="h5" color="inherit">
                        Logout
                    </Typography>
                </Box>
            </Box>
        </Toolbar>
    </AppBar>
    }

    return (
        <>
           {navbarComponent}
        </>
    )
}

export default Navbar;