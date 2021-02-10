import Headers from "./Headers"
import Navbar from "./Navbar"
import Head from "next/head"

const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: 'column'
};


const Layouts = props => {

    const appTitle = `>Next-Js-Blog`;

    return (
        <div className="Layouts" style={layoutStyle}>
            <Head>
                <title>Nextjs Blog</title> 
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Headers appTitle={appTitle} />
                <div className="Content" >
                    {props.children}
                </div>  
            <Navbar />
        </div>
    )

    
};


export default Layouts;