import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, post, put } from '../../../services/Service';
import Tema from '../../../models/Tema';
import "./CadastroTema.css";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroTema() {

    let history = useNavigate();
    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado!")
            history("/login")
        }
    }, [token])

    async function findById(id: string) {
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Tema atualizado com sucesso!');

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade mínima de caracteres!")
            }

        } else {

            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                
                alert('Tema cadastrado com sucesso!');
                
            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade mínima de caracteres!")
            }
        }
        
        back()

    }

    function back() {
        history('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="descricao"
                    label="Descricao"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="secondary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;


