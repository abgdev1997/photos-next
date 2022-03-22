import React from 'react';
import { useRouter } from 'next/router'
import { Grid, Flex, Box } from '@chakra-ui/react'

const Photo = ({photo}) => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <Flex direction="column">
            <Flex direction="row" gap={40} align="center" justify="center"> 
                <img src={photo.url}></img>
                <img src={photo.thumbnailUrl}></img>
            </Flex>
            <Box>{photo.id}</Box>
            <Box>{photo.title}</Box>
        </Flex>
    );
}

export async function getStaticProps({params}){
    
    const req = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    const data = await req.json();
    return {
        props: { photo: data },
    }
}

export async function getStaticPaths() {

    const req = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await req.json();
    const result = data.filter(photo => photo.id <= 50)

    const paths = result.map(photo => {
        return { params: { id: `${photo.id}` } }
    })

    return {
        paths,
        fallback: false
    };
}

export default Photo; 
