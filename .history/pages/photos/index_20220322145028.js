import React from 'react';

const Index = ({photos}) => {
    return (
        <div>
            {photos.map(photo => {
                <img src={photo?.thumbnailUrl} alt={photo?.title}/>
            })}
        </div>
    );
}

export async function getServerSideProps(){
    const req = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await req.json();

    return {
        props: { photos: data },
    }
}

export default Index;
