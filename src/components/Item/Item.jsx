import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Image, Card, Box, Divider, Grid, GridItem, ButtonGroup, Button, CardHeader, Text, Heading, Flex, CardBody, CardFooter, Stack, useBreakpointValue } from '@chakra-ui/react'

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, categoria, marca, precio, envdisponible, stock, imagen }) => {
    let envio = false;

    if (envdisponible == true) {
        envio = "Si"
    }

    return (
        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' />
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'>{nombre} {marca}</Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='ItemCardFooter'>
                    <Box>
                        <ButtonGroup spacing='32'>
                            <Button className='itemButton' variant='solid' colorScheme='teal'>
                                Comprar
                            </Button>
                            <Button className='detalleItemButton' variant='solid' colorScheme='blue'>
                                <Link to={`/producto/${id}`}>Ver Detalle</Link>
                            </Button>
                        </ButtonGroup>
                    </Box>
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default Item

/*
                        <button className='OpcionItem'> <ChakraLink href={ `/producto/${id}` }>Ver Detalle</ChakraLink> </button>
                        <Button className='itemButton' variant='ghost' colorScheme='blue'>Agregar a carrito</Button>


<Text className='ItemCardText' color='blue.600' fontSize='1xl'>Cantidad: <span><ItemCount stock={stock}/></span></Text>

        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{nombre} {marca}</h2>
                <h4 className='ItemHeader'>{descripcion}</h4>
            </header>
            <picture className='ImgPic'>
                <img src={imagen} alt={nombre} className='ImgItem' />
            </picture>
            <section className='DataItem'>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
                <p className='Info'>
                    Envio a todo el pais: {envio}
                </p>
            </section>
            <footer className='ItemFooter'>
                Cantidad <ItemCount stock={stock} />
                <button className='OpcionItem'>Ver Detalle</button>
            </footer>
        </article >


        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre} {marca}</Heading>
                        <Text>{descripcion}</Text>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Disponibilidad: {stock}</Text>
                        <Text color='blue.600' fontSize='1xl'>Envio a Domicilio: {envio}</Text>
                        <button className='OpcionItem'>Ver Detalle</button>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='3'>
                        <Button variant='solid' colorScheme='blue'>Comprar</Button>
                        <Button variant='ghost' colorScheme='blue'>Agregar a carrito</Button>
                    </ButtonGroup>
                    <Text color='blue.600' fontSize='1xl'>Cantidad: <ItemCount stock={stock} /></Text>
                </CardFooter>
            </Card>
        </Flex>






        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre} {marca}</Heading>
                        <Text>{descripcion}</Text>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Disponibilidad: {stock}</Text>
                        <Text color='blue.600' fontSize='1xl'>Envio a Domicilio: {envio}</Text>
                        <button className='OpcionItem'>Ver Detalle</button>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='3'>
                        <Button variant='solid' colorScheme='blue'>Comprar</Button>
                        <Button variant='ghost' colorScheme='blue'>Agregar a carrito</Button>
                    </ButtonGroup>
                    <Text color='blue.600' fontSize='1xl'>Cantidad: <ItemCount stock={stock} /></Text>
                </CardFooter>
            </Card>
        </Flex>



*/