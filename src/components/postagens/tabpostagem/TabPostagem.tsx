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
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre o blog" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography className='texto-sobre' variant="body1" gutterBottom color="textPrimary" align="center">O Blog foi criado durante as aulas da Generation Brasil, entre fevereiro e maio de 2022. Inicialmente foi criado um blog para o âmbito pessoal mas, em agosto pude conhecer pessoalmente a B3 - Bolsa de Valores do Brasil, por uma iniciativa da empresa, "B3 de portas abertas" em parceria com a Generation. Isso me inspirou e me motivou a mudar o blog e fazê-lo especialmente para nós mulheres que infelizmente lutamos até hoje por uma sociedade mais igualitária e nada machista. Por sermos mulheres, entrar no mercado de trabalho, principalmente em algumas áreas como tecnologia, aparecem mais dificuldades e infelizmente muitas desanimam, desistindo de realizar seus sonhos profissionais. Espero que esse blog possa de alguma maneira ajudar, para que possamos ver mais mulheres em todas as áreas de atuação.</Typography>
                </TabPanel>

            </TabContext>
        </>
    )
}

export default TabPostagem;