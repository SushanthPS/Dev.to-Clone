import styled from "styled-components";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import HomeArticle from "./HomeArticle";
import { Link } from "react-router-dom";

export default function SearchArticles() {
    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://dev.to/api/articles/?tag=${params.query}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }, []);

    return (
        <Container>
            <div className="navComponent">
                <div className="col1">
                    <h1>Search results for {params.query}</h1>
                </div>
                <div className="col2">
                    <div className="sort">
                        <span>
                            {" "}
                            <strong> Most Relevant</strong>
                        </span>
                        <span> Newest</span>
                        <span> Oldest</span>
                    </div>
                </div>
            </div>
            <div className="mainBody">
                <div className="forNavigation">
                    <div className="dummyNavigation">
                        <p className="posts">
                            {" "}
                            <strong> Posts</strong>
                        </p>
                        <p>Podcasts</p>
                        <p>People</p>
                        <p>Comments</p>
                        <p>My posts only</p>
                    </div>
                </div>
                <div className="blogsDiv">
                    <div className="blogs">
                        {data.map((obj, i) => (
                            <Link to={`/article/${obj.id}`}>
                                <HomeArticle key={obj.id} i={i} obj={obj} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    position: sticky;
    top: 57px;
    margin-bottom: 210px;
    padding-bottom: 30px;
    background-color: rgb(239, 239, 239);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    a {
        text-decoration: inherit;
        color: inherit;
    }

    .navComponent {
        width: 100%;
        display: flex;
        .col1 {
            flex-basis: 66%;

            h1 {
                margin-left: 160px;
            }
        }
        .col2 {
            flex-basis: 34%;
            align-items: center;

            .sort {
                width: 53%;
                padding: 7%;
                display: flex;
                justify-content: space-between;

                strong {
                    font-weight: 700;
                }
            }
        }
    }

    .mainBody {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .forNavigation {
            flex-basis: 30%;
            .dummyNavigation {
                margin-left: 43%;
                padding: 0 2%;

                .posts {
                    padding: 4%;
                    background-color: white;
                    border-radius: 6px;
                    margin-top: 0%;
                }
            }
        }
        .blogsDiv {
            flex-basis: 68%;
            .blogs {
                width: 82%;
            }
        }
    }
`;
