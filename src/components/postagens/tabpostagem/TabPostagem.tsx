import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {

    const [value, setValue] = useState('1');

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue)
    }

    return (
        <>
            <TabContext value={value}>

                <AppBar className='barraSobre' position="static">
                    <Tabs className="texto" centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todos os feedbacks" value="1" />
                        <Tab label="Sobre Vivi" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Olá, meu nome é Viviane e tenho 23 anos. Sou uma pessoa extremamente apaixonada pela minha família, gosto muito de pôr do sol e da musica let her go do passenger, pois são coisas que me trazem paz e tranquilidade na correria do dia a dia. sou catolica praticante, e na igreja já participei e ainda participo de grupos de música, dança e teatro, o que me ajuda muito a melhorar a minha timidez. Já trabalhei como auxiliar administrativo em um consultório oftalmológico por quase 5 anos, onde fazia de tudo um pouco, arquivamento de prontuários, atendimento telefônico, presencial, pelo whatsapp e email, fazia marcação de consultas e exames e solicitava autorizações de exames para os convênios. Hoje, sou revendedora de joias, pratas e folheados estou no ultimo semestre da faculdade de analise e desenvolvimento de sistemas na universidade nove de julho em ead. faço cursos na plataforma da alura e tenho certificados de html, css, js, scrum e excel, fiz parte de um desafio da Rafaella Ballerini da recriação de uma landing page, onde era usado html e css e também participo do bootcamp da generation para me tornar uma desenvolvedora java fullstack.</Typography>
                </TabPanel>

            </TabContext>
        </>
    )
}

export default TabPostagem;