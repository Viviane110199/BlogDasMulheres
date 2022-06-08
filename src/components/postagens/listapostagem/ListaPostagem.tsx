import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import './ListaPostagem.css';

function ListaPostagem() {

  let navigate = useNavigate();
  const [posts, setPost] = useState<Postagem[]>([]);
  
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  )

  let userId = +id

  useEffect(() => {
    if (token === "") {
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

  async function getPost() {
    await busca("/postagens", setPost, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
      {posts.map(post => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>

              <Typography color="textSecondary" gutterBottom>
                Feedback
              </Typography>

              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>

              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>

              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>

              <Typography variant="body2" component="p">
                {post.usuario?.nome}
              </Typography>

            </CardContent>

            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

              {
              (post.usuario?.id !== null && userId === post.usuario?.id) ?
                <>
                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="secondary" >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      Deletar
                    </Button>
                  </Box>
                </Link>
                </>
                    :
                    <Box>
                    </Box>
                }
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  )
}

export default ListaPostagem;