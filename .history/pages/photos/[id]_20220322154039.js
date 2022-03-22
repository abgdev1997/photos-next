import React from 'react';
import { useRouter } from 'next/router'
import { Grid, Flex, Box } from '@chakra-ui/react'

const Id = ({photo}) => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <Flex>
            <Flex>
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

export default Id;
