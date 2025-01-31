import dynamic from "next/dynamic";

const Prime = dynamic(() => {
    console.log("Carregando o Prime..."); 
    return import("Relacionamento/Prime");
  }, { 
    ssr: false, 
    loading: () => <p>Loading Prime...</p> 
  });

export default function Home() {  
  return (
    <>
      <main>
        <header>App1 Header</header>
        <nav>
          <h2>App1 Menu</h2>
        </nav>
        <Prime/> xxxx
        <footer>App1 Footer</footer>
      </main>
    </>
  );
}
