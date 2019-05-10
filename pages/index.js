import React from 'react';
import NoSSR from 'react-no-ssr';
import Loading from '../components/loading';
import Compo from '../components/Compo';
// export for others scripts to use
const loading = <Loading/>;

function HomePage() {
    return (
        <main>
            <section>
                <h1>
                    Esta parte se renderiza en el servidor.
                </h1>
            </section>

            <NoSSR onSSR={loading}>
                <Compo/>
            </NoSSR>

            <style jsx>{`
        section {
          align-items: center;
          display: flex;
          height: 50vh;
          justify-content: center;
        }
      `}</style>
        </main>
    );
}

export default HomePage;