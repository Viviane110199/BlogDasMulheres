import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/user/userReducer';
import { toast } from 'react-toastify';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import "./Home.css";

function Home() {

  let navigate = useNavigate();
    const token = useSelector <UserState, UserState["tokens"]> (

        (state) => state.tokens

    );
    
    useEffect(() => {
      
        if (token == "") {
          toast.error('Você precisa estar logado!', {
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
  }, [token])

  return (
    <>
      <Grid className='caixa' container>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography className="text-principal" variant="h4" gutterBottom color="textPrimary" component="h4" align="center">Seja bem vinda!</Typography>
          </Box>
          
          <Typography className="text1" variant="h6" gutterBottom color="textPrimary" component="h6" align="center">O objetivo desse Blog é trazer relatos e trajetórias de mulheres que já estão inseridas no mercado de trabalho, para que assim possam dar ânimo e força à aquelas que estão iniciando agora ou estão em transição de carreira. <strong>Juntas somos mais fortes!</strong></Typography>
        </Grid>

        <Grid item xs={6} >
            
            <Typography className="text2" variant="h6" gutterBottom color="textPrimary" component="h6" align="center">Deixe aqui sua trajetória e inspire outras mulheres!</Typography>
          
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
            </Box>
          </Grid>

        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;