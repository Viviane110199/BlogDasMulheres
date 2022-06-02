import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
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
                <Typography variant="h5" color="inherit">
                    Blog da Vivi
                </Typography>
            </Box>

            <Box className='box2' display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>

                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>

                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>

                <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className='cursor1'>
                        <Typography className="nav-text" variant="h6" color="inherit">
                            Cadastrar Temas
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className='cursor1' onClick={ goLogout }>
                    <Typography variant="h6" color="inherit">
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