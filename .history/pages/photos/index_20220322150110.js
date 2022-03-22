import React from 'react';

const Index = ({photos}) => {
    return (
        <div>
            <p>{photos[0].title}</p>
        </div>
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
