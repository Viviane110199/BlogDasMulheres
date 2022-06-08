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
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Deixe aqui um feedback para meu desempenho e performance!</Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
          </Box>

        </Grid>

        <Grid item xs={6} >
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF80yvNW4LLpA/profile-displayphoto-shrink_800_800/0/1651601832552?e=1657152000&v=beta&t=3GF8eDhfeHq5btGWBQ62x7JmE3Odh5eLuwG8MMiynG8" alt="" width="500px" height="500px" />
        </Grid>

        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;