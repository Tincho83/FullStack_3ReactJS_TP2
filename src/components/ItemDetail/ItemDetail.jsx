import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Image, Card, Box, Divider, Grid, GridItem, ButtonGroup, Button, CardHeader, Text, Heading, Flex, CardBody, CardFooter, Stack, useBreakpointValue } from '@chakra-ui/react'

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, nombre, descripcion, categoria, marca, precio, envdisponible, stock, imagen }) => {

    let envio = "No";

    if (envdisponible == true) {
        envio = "Si"
    }

    const alAgregar = (cantidad) => {
        if (cantidad > 1) {
            toast.success(`Agregaste ${cantidad} unidades.`, { position: "top-center", autoClose: 3000 });
        }
        else {
            toast.success(`Agregaste ${cantidad} unidad.`, { position: "top-center", autoClose: 3000 });
        }
    }

    return (
        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' />
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'> {marca} {nombre} </Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Disponibilidad: {stock}  &nbsp;&nbsp;&nbsp; Envio a Domicilio: {envio}</Text>
                        <Text color='black.900' fontSize='19px'> {descripcion} </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='ItemCardFooter'>
                    <Box>
                        <ButtonGroup spacing='3'>
                            <Button className='itemButton' variant='solid' colorScheme='teal'>Comprar</Button>
                        </ButtonGroup>
                    </Box>
                    <Box className='ItemCardText' color='blue.600' fontSize='1xl'>
                        <Text className='ItemCantText'>Cantidad:</Text>
                        <ItemCount stock={stock} valorInicial={1} alAgregar={alAgregar}/>
                        <ToastContainer />
                    </Box>
                </CardFooter>
            </Card>
        </Flex>

    )
}

export default ItemDetail


/*
 <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {categoria}
                </p>
                <p className='Info'>
                    Marca: {marca}
                </p>
                <p className='Info'>
                    Descripcion: {descripcion}
                </p>
                <p className='Info'>
                    Precio: {precio}
                </p>
                <p className='Info'>
                    Stock: {stock}
                </p>
                <p className='Info'>
                    Apto para envio: {envio}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount valorInicial={1} stock={stock} alAgregar={alAgregar} ></ItemCount>
                <ToastContainer />
            </footer>

        </article>
 

*/
