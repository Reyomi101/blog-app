import Link from 'next/link';

// const headerStyle = {
//     backgroundColor: "blue",
//     color: "white",
//     width: "100%",
//     height: "50px"
// };

const Headers = props => (
    <Link href="/">
    <div className="Headers" >
      {props.appTitle}
    </div>
    </Link>
);

export default Headers;