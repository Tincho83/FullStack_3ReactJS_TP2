import { Box } from '@chakra-ui/react'
import React from 'react'
import './Code404.css'

const Code404 = () => {
    return (
        <Box>
            <p className='tituloError'>Error 404: Pagina No Encontrada</p>
            <p className='subtituloError'>Lo siento, la página que estás buscando no se pudo encontrar, revise la direccion web o url.</p>
        </Box>
    )
}

export default Code404
