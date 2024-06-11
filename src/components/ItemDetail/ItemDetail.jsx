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
                    <Image src={imagen} alt={nombre} borderRadius='lg' className='ImgPic'/>
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

*/
