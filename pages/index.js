import React from 'react';
import Link from 'next/Link';
import 'isomorphic-fetch';

//minha api renderiza do lado do servidor todos os dados de repositórios
const Home = ({ repositories}) => (
    <div>
    <Link href="/blog">
        <button style={{color:"blue"}}><a>Blog</a></button>
    </Link>
    <Link href="/header">
        <button style={{color:"blue"}}><a>Inicio</a></button>
    </Link>
    {repositories.map(repo => <h1 key={repo.id}>{repo.name}</h1>)}
    </div>
);

Home.getInitialProps = async () => {
     const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
    const repositories = await response.json();

    console.log(repositories);

    return {repositories};
};

export default Home;

