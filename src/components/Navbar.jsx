import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Container = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 56px;
    width: 100%;
    background-color:white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: block;
    box-sizing: border-box;
    z-index: 999;

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .cont {
        margin: auto;
        display: flex;
        align-items: center;
        position: relative;
        height: 56px;
        max-width: 1260px;
        padding: 0 1rem;
    }

    .logo {
        max-width: 200px;
        display: inline-flex;
        align-self: stretch;
        flex-shrink: 0;
        align-items: center;
        vertical-align: middle;
        letter-spacing: -0px;

        div {
            display: inline-block;
            color: white;
            background-color: black;
            font-size: 1.25rem;
            font-weight: 700;
            width: 50px;
            height: 40px;
            border-radius: 3px;
            line-height: 37px;
            text-align: center;
            letter-spacing: -1px;
        }

        div:hover {
            background-color: #424242;
        }
    }

    .search {
        margin: 0 16px;
        display: block;
        max-width: 420px;
        flex: 1 1 0%;
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        position: relative;

        input {
            line-height: 1.5;
            margin: 0;
            padding: 7px 8px;
            font-size: 1rem;
            border-radius: 0.375rem;
            border: 1px solid gainsboro;
        }

        input:hover {
            border-color: gray;
        }

        input:focus {
            box-shadow: 0 0 0 1px #3b49df;
            outline: none;
            border-color: #3b49df;
        }
    }

    .search:focus {
        border-color: #3b49df;
    }

    .search > div {
        margin: 4px;
        padding: 4px;
        position: absolute;
        top: 0px;
        bottom: 0;
        border-radius: 1000px;
        right: 0.5rem;
        font-size: 0.875rem;
        width: 24px;
        height: 24px;
    }

    .search > div:hover,
    .login:hover {
        background-color: rgba(0, 0, 0, 0.035);
    }

    .log-buttons {
        display: flex;
        margin-left: auto;
        height: 100%;
        align-items: center;
        margin-right: 14px;
    }

    .login {
        display: block;
        white-space: nowrap;
        margin-left: auto;
        margin-right: 0.5rem;
        color: #3b49df;
        text-align: center;
        padding: 8px 16px;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 0.375rem;
        line-height: 1.5rem;
    }

    .register {
        font-size: 1rem;
        white-space: nowrap;
        margin-right: 8px;
        padding: 8px 16px;
        border-radius: 0.375rem;
        background-color: #3b49df;
        color: white;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .login:hover {
        color: #323ebe;
        background-color: rgba(0, 0, 0, 0.035);
    }

    .register:hover {
        background-color: #323ebe;
    }
`;

export default function Navbar() {

    const [query, setQuery] = useState("");
 
   
    function handleChange(e){
        let newQuery = e.target.value;
        newQuery= newQuery.trim().split(" ")[0];
       
        setQuery(newQuery)

    }
        
   
    
    return (
        <Container>
            <div className="cont">
                <Link className="logo" to="/">
                    <div>DEV</div>
                </Link>
                <div className="search">
                    <input onChange={ handleChange} type="text" placeholder="Search..." />

                    <div >
                        <Link to={`/search/${query}`}>
                            <img src="/Navbar/search.svg" alt="" />
                        </Link> 
                    </div>
                </div>
                <div className="log-buttons">
                    <Link className="login">Log in</Link>
                    <Link className="register">Create account</Link>
                </div>
            </div>
        </Container>
    );
}
