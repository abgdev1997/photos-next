import React from 'react';
import { Grid } from '@chakra-ui/react'

const Index = ({photos}) => {
    return (
        <Grid autoColumns gap={6}>
            {photos.map((photo, index) => (
                <div key={index}>
                    <img src={photo.thumbnailUrl} alt={photo.id}/>
                    <p>{photo.title}</p>
                </div>
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
