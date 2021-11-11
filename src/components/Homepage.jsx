import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import HomeArticle from "./HomeArticle";

const Container = styled.div`
    flex: 1 auto;
    visibility: visible;
    font-size: 18px;
    display: block;
    line-height: 1.5;
    margin-top: 56px;
    background-color: #efefef;

    .cont {
        font-size: 1rem;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        display: grid;
        gap: 1rem;
        grid-template-columns: 240px 2fr 1fr;
        padding: 1rem;
        box-sizing: border-box;
    }

    .middle-bar {
        min-width: 0;
        display: block;
    }

    .middle-bar > header {
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
    }

    .middle-bar > header > nav {
        margin-left: 0;
        margin-right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .middle-bar > header > nav > ul {
        list-style: none;
        display: flex;
        overflow-x: unset;
        flex-wrap: nowrap;
        padding: 0.25rem 0;
        margin: calc(-1 * 0.25rem) 0 !important;
        box-sizing: border-box;
    }

    .middle-bar > header > nav > ul > li > span {
        color: #090909;
        background: none;
        display: inline-flex;
        padding: 0.5rem 0.75rem;
        white-space: unset;
        position: relative;
        border-radius: 0.375rem;
        cursor: pointer;
    }

    .middle-bar > header > nav > ul > li:nth-of-type(1) {
        font-weight: ${(props) => (props.feed === "Feed" ? 700 : 400)};
    }

    .middle-bar > header > nav > ul > li:nth-of-type(2) {
        font-weight: ${(props) => (props.feed === "Latest" ? 700 : 400)};
    }

    .middle-bar > header > nav > ul > li:nth-of-type(3) {
        font-weight: ${(props) => (props.feed === "Top" ? 700 : 400)};
    }

    .middle-bar > header > nav > ul > li > span:hover {
        color: #3b49df;
        background-color: #f7f7f7;
    }

    .middle-bar > header > nav > ul:nth-of-type(2) {
        font-size: 1rem;
    }

    .middle-bar > header > nav > ul:nth-of-type(2) > li:nth-of-type(1) {
        font-weight: ${(props) => (props.time === "Week" ? 700 : 400)};
    }

    .middle-bar > header > nav > ul:nth-of-type(2) > li:nth-of-type(2) {
        font-weight: ${(props) => (props.time === "Month" ? 700 : 400)};
    }

    .middle-bar > header > nav > ul:nth-of-type(2) > li:nth-of-type(3) {
        font-weight: ${(props) => (props.time === "Year" ? 700 : 400)};
    }

    .middle-bar > header > nav > ul:nth-of-type(2) > li:nth-of-type(4) {
        font-weight: ${(props) => (props.time === "Infinity" ? 700 : 400)};
    }

    .middle-data {
        min-height: 90vh;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
    }
`;

export default function Homepage() {
    const [feed, setFeed] = useState("Feed");
    const [time, setTime] = useState("Week");
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [feed, time]);

    const getData = async () => {
        let res;
        let t = 7;

        if (time === "Week") t = 7;
        else if (time === "Month") t = 30;
        else if (time === "Year") t = 365;
        else if (time === "Infinity") t = 99999;

        if (feed === "Feed")
            res = await axios.get("https://dev.to/api/articles");
        else if (feed === "Latest")
            res = await axios.get("https://dev.to/api/articles/latest");
        else if (feed === "Top")
            res = await axios.get(`https://dev.to/api/articles?top=${t}`);
        setData(res.data);
    };

    return (
        <Container feed={feed} time={time}>
            <div className="cont">
                <div className="left-bar"></div>
                <div className="middle-bar">
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <span onClick={() => setFeed("Feed")}>
                                        Feed
                                    </span>
                                </li>
                                <li>
                                    <span onClick={() => setFeed("Latest")}>
                                        Latest
                                    </span>
                                </li>
                                <li>
                                    <span onClick={() => setFeed("Top")}>
                                        Top
                                    </span>
                                </li>
                            </ul>
                            {feed === "Top" && (
                                <ul>
                                    <li>
                                        <span onClick={() => setTime("Week")}>
                                            Week
                                        </span>
                                    </li>
                                    <li>
                                        <span onClick={() => setTime("Month")}>
                                            Month
                                        </span>
                                    </li>
                                    <li>
                                        <span onClick={() => setTime("Year")}>
                                            Year
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => setTime("Infinity")}
                                        >
                                            Infinity
                                        </span>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </header>
                    <div className="middle-data">
                        {data.map((obj) => (
                            <HomeArticle key={obj.id} obj={obj} />
                        ))}
                    </div>
                </div>
                <div className="right-bar"></div>
            </div>
        </Container>
    );
}
