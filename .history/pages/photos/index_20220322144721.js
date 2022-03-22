import React from 'react';

const Index = ({photos}) => {
    return (
        <div>
            {console.log(photos)}
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
