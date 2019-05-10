import React from 'react';
import $ from 'jquery';
// export for others scripts to use

class Compo extends React.Component {
    componentDidMount() {
        $('#jss').click(()=>{
            console.log("hola");
        })
    }

    render()
    {
        return (
            <div>
                <section>
                    <h2 id="jss">
                        Esta parte <em>no</em> se renderiza en el servidor.
                    </h2>
                </section>
            </div>
        );
    }

}

export default Compo;