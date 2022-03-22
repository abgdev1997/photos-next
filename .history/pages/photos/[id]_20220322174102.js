import React from 'react';
import { useRouter } from 'next/router'
import { Grid, Flex, Box } from '@chakra-ui/react'

const Photo = ({photo}) => {

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
    console.log(params)
    const req = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    const data = await req.json();
    return {
        props: { photo: data },
    }
}

export async function getStaticPaths() {

    const req = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await req.json();
    console.log(data)
    const result = data.filter(photo => photo.id <= 5)

    const paths = result.map(photo => {
        return { params: { id: photo.id } }
    })

    console.log(paths)

    return {
        paths,
        fallback: false
    };
}

export default Photo;
