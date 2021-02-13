import React from 'react';
import Link from 'next/Link';


export default () => (
<div>
    <Link href="/">
        <button style={{color:"blue"}}><a>Home</a></button>
    </Link>
    <div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Top!</h4>
  <p>muito bem! Você conseguiu acessar a página blog. Agora desabilite o JavaScript nas ferramentas do desenvolvedor e clique no botão Home </p>
  <hr />
  <p className="mb-0">Assim você verá o sistema rodando em Server-side rendering (SSR) ,do lado do servidor.</p>
</div>
</div>
);