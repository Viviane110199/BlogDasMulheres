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
            <Box className='box1'>
                <Typography variant="h5" color="inherit" className="cursor">
                    Blog da Vivi
                </Typography>
            </Box>

            <Box className='box2' display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h5" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>

                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h5" color="inherit">
                            Feedbacks
                        </Typography>
                    </Box>
                </Link>

                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h5" color="inherit">
                            Empresas
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className='cursor2' onClick={ goLogout }>
                    <Typography variant="h5" color="inherit">
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