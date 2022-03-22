import React from 'react';
import { Grid, Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'
import  Head  from 'next/head';

const Index = ({photos}) => {
    return (
        <>
        <Head>
            <title>List of photos</title>
        </Head>
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            {photos.map((photo, index) => (
                <Link key={index} href={`/photos/${photo.id}`}>
                    <Flex direction='column' align='center' justify='center' cursor='pointer' margin="20px">
                        <img src={photo.thumbnailUrl} alt={photo.id}/>
                        <Box align='center' justify='center'>{photo.title}</Box>
                    </Flex>
                </Link>
            ))}
        </Grid>
        </>
    );
}

export async function getServerSideProps(){
    const req = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await req.json();
    const result = data.filter(photo => photo.id <= 50)
    return {
        props: { photos: result },
    }
}

export default Index;
