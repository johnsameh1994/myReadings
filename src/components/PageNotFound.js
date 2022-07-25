import { Link } from "react-router-dom";

const PageNotFound = () => {

    

    return (
            <div className="text-center" 
            style={{
                textAlign: "center",
                paddingTop: "100px"
            }}>
                <h1>Page Not Found</h1>
                <Link className="" to="/" 
                 style={{
                    backgroundColor: "darkGreen",
                    padding: "10px 15px",
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    margin: "2px"
                }}>
                    Back Home
                </Link>
                <Link className="" to="/search" 
                 style={{
                    backgroundColor: "#626262",
                    padding: "10px 15px",
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                    margin: "2px"
                }}>
                    Go To Search
                </Link>
            </div>
    );

}

export default PageNotFound;