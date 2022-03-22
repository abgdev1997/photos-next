import React from 'react';
import { Grid, Flex } from '@chakra-ui/react'
import Link from 'next/link'

const Index = ({photos}) => {
    return (
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            {photos.map((photo, index) => (
                <Link key={index} href={`/photos/${photo.id}`}>
                    <Flex direction='column' align='center' justify='center' cursor='pointer'>
                        <img src={photo.thumbnailUrl} alt={photo.id}/>
                        <p>{photo.title}</p>
                    </Flex>
                </Link>
            ))}
        </Grid>
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
