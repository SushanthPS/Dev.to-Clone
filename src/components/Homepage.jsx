import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import HomeArticle from "./HomeArticle";
import { Link } from "react-router-dom";
=======

>>>>>>> 33b9aba8b0437826fa5dd23bb616c9bf321ca13d

const Container = styled.div`
    flex: 1 auto;
    visibility: visible;
    font-size: 18px;
    display: block;
    line-height: 1.5;
    margin-top: 57px;
    background-color: #efefef;

    a {
        color: inherit;
        text-decoration: inherit;
    }

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

const Left = styled.div`
    display: block;
    grid-row-end: initial;
    width: 240px;
    font-size: 1rem;
    box-sizing: border-box;

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .icons {
        margin-bottom: 1.5rem;
    }

    .icons > ul,
    .others > ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .icon-item > a:hover {
        background-color: #e3e3e3;
        color: #3b49df;
    }

    .icon-item > a {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        border-radius: 0.375rem;
        color: #242424;

        img {
            margin-right: 0.5rem;
            vertical-align: middle;
            width: 1.5rem;
            height: 1.5rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
        }
    }

    .others {
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }

    .others > h2 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        margin-top: 1.5rem;
    }

    .social-media {
        display: flex;
        margin-bottom: 1.5rem;
        justify-content: flex-start;
    }

    .social-media > a {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        color: #717171;
    }
    .social-media > a > svg {
        fill: currentColor;
    }

    .social-media > a > svg:hover {
        color: #575757;
    }

    .sticker {
        padding: 0.75rem;
        background: #f9f9f9;
        color: #242424;
        box-shadow: 0 0 0 1px rgba(9, 9, 9, 0.05);
        border-radius: 10px;
        margin: 10px auto;
    }

    .sticker > p > img {
        width: 100%;
        height: auto;
        border-radius: 0.375rem;
        display: inline-block;
        vertical-align: middle;
    }

    .sticker > h3,
    .link {
        color: #3b49df;
        margin: 0;
        cursor: pointer;
    }

    .checkThis {
        padding: 0.75rem;
        margin-top: 1rem;
        box-shadow: 0 0 0 1px rgba(9, 9, 9, 0.05);
        border-radius: 10px;
        background: #f9f9f9;
        color: #242424;
    }
`;

const Right = styled.div`
    display: block;
    width: 1fr;
    box-sizing: border-box;
    font-size: 1rem;

    .aside {
        display: grid;
        gap: 1rem;
    }

    .first {
        padding: 1rem;
        background-color: #f9f9f9;
        color: #242424;
        box-shadow: 0 0 0 1px rgba(9, 9, 9, 0.05);
        border-radius: Max(
                0px,
                Min(0.375rem, calc((100vw - 4px - 100%) * 9999))
            ) / 0.375rem;

        p {
            margin: 0;
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 0.375rem;
            display: inline-block;
            vertical-align: middle;
            margin: 10px auto;
        }
    }

    .blue-bold {
        color: #3b49df;
        font-weight: 700;
    }

    section {
        background-color: #f9f9f9;
        color: #242424;
        box-shadow: 0 0 0 1px rgba(9, 9, 9, 0.05);
        border-radius: Max(
                0px,
                Min(0.375rem, calc((100vw - 4px - 100%) * 9999))
            ) / 0.375rem;
        overflow-wrap: anywhere;
    }

    .header {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #efefef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #242424;

        h3 {
            font-size: 1.25rem;
            line-height: 1.5;
            font-weight: 700;
            margin: 0;
        }

        span {
            font-weight: 500;
            font-size: 0.875rem;
            color: #3b49df;
            cursor: pointer;
        }
    }

    .list-body {
        cursor: pointer;
    }

    .list-body > span {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid #efefef;
        color: #242424;
    }

    .list-body > span:hover {
        color: #3b49df;
        background-color: #ffffff;
    }

    .list-body > span > div:nth-of-type(2) {
        color: #717171;
        font-size: 0.875rem;
        padding-top: 0.25rem;
    }

    .create-list {
        display: block;
        text-align: center;
        font-weight: 500;
        font-size: 0.875rem;
        padding: 0.75rem !important;
    }

    .new-button {
        background-color: #3b49df;
        border: 1px solid #3b49df;
        color: white;
        font-size: 0.75rem;
        padding: 4px;
        text-align: center;
        line-height: 1;
        border-radius: 0.375rem;
        display: inline-block;
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
<<<<<<< HEAD
        <Container feed={feed} time={time}>
            <div className="cont">
                <Left>
                    <nav className="icons">
                        <ul>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/house.svg"
                                        alt=""
                                    />
                                    Home
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/reading.svg"
                                        alt=""
                                    />
                                    Reading List
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/listing.svg"
                                        alt=""
                                    />
                                    Listings
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/podcast.svg"
                                        alt=""
                                    />
                                    Podcasts
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/videos.svg"
                                        alt=""
                                    />
                                    Videos
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/tags.svg"
                                        alt=""
                                    />
                                    Tags
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/faq.svg"
                                        alt=""
                                    />
                                    FAQ
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/shop.svg"
                                        alt=""
                                    />
                                    DEV Shop
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        style={{
                                            color: "blue",
                                        }}
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/sponsors.svg"
                                        alt=""
                                    />
                                    Sponsors
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/about.svg"
                                        alt=""
                                    />
                                    About
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/contact.svg"
                                        alt=""
                                    />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="others">
                        <h2>Other</h2>
                        <ul>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/conduct.svg"
                                        alt=""
                                    />
                                    Code of Conduct
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/privacy.svg"
                                        alt=""
                                    />
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="">
                                    <img
                                        width="24px"
                                        height="24px"
                                        src="./Navbar/terms.svg"
                                        alt=""
                                    />
                                    Terms of use
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="social-media">
                        <a
                            href="https://twitter.com/thepracticaldev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-labelledby="aca1fbm5llavtquijauaa5utyfm68ymf"
                                class="crayons-icon"
                            >
                                <title id="aca1fbm5llavtquijauaa5utyfm68ymf">
                                    Twitter
                                </title>
                                <path
                                    d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://facebook.com/thepracticaldev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-labelledby="aphg0c6gvrcy5mkpclzjp7f30r2n215g"
                                class="crayons-icon"
                            >
                                <title id="aphg0c6gvrcy5mkpclzjp7f30r2n215g">
                                    Facebook
                                </title>
                                <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/thepracticaldev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-labelledby="aktv5xwuvf28ks5xe4pvzk8pykue30r2"
                                class="crayons-icon"
                            >
                                <title id="aktv5xwuvf28ks5xe4pvzk8pykue30r2">
                                    Github
                                </title>
                                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com/thepracticaldev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-labelledby="ai6mybol0a31vwsrxaffxhov54n23ow"
                                class="crayons-icon"
                            >
                                <title id="ai6mybol0a31vwsrxaffxhov54n23ow">
                                    Instagram
                                </title>
                                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://twitch.com/thepracticaldev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-labelledby="afhljalbksrdj2xgynm017g3a28b0smi"
                                class="crayons-icon"
                            >
                                <title id="afhljalbksrdj2xgynm017g3a28b0smi">
                                    Twitch
                                </title>
                                <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="sticker">
                        <p>
                            <img
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--pVCMYZWJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://scontent-lga3-1.cdninstagram.com/vp/7c898e2c9e9fa71f72dd5d422d444549/5DFE1BFA/t51.2885-15/fr/e15/s1080x1080/57390242_386431405416711_440644832181536446_n.jpg%3F_nc_ht%3Dscontent-lga3-1.cdninstagram.com"
                                alt=""
                            />
                        </p>
                        <h3>Do you have your sticker pack yet?</h3>
                    </div>
                    <div className="checkThis">
                        <p>
                            DEV runs on 100% open source code known as{" "}
                            <span className="link">Forem</span> .
                        </p>
                        <p>Contribute to the codebase or host your own!</p>
                        <p>
                            <strong>Check these out! 👇</strong>
                        </p>
                        <ul>
                            <li className="link">Main Forem Repo</li>
                            <li className="link">Self-Host Instructions</li>
                        </ul>
                    </div>
                </Left>
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
                        {data.map((obj, i) => (
                            <Link to={`/article/${obj.id}`}>
                                <HomeArticle key={obj.id} i={i} obj={obj} />
                            </Link>
                        ))}
                    </div>
                </div>
                <Right>
                    <aside className="aside">
                        <div className="first">
                            <p>
                                <img
                                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--SHlJgkk0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://jess.forem.lol/remoteimages/uploads/articles/a3ojuveqrskiei1m6x6x.png"
                                    alt="Smiley Icon"
                                    height="1260"
                                    width="2240"
                                    loading="lazy"
                                />
                            </p>
                            <p>
                                <strong>DEV is built on </strong>{" "}
                                <span className="blue-bold">Forem</span> — open
                                source software for a new community web. If you
                                want to discuss functionality with the team and
                                other folks from the community:{" "}
                                <span className="blue-bold">
                                    {" "}
                                    <strong>join Forem.dev</strong>
                                </span>
                                . 🌱
                            </p>
                        </div>
                        <section>
                            <header className="header">
                                <h3>Listings</h3>
                                <div>
                                    <span>See all</span>
                                </div>
                            </header>
                            <div className="list-body">
                                <span>
                                    <div>
                                        NextUI - Build beautiful React websites
                                        regardless of your design experience
                                    </div>
                                    <div>products</div>
                                </span>
                                <span>
                                    <div>
                                        Get $100 for 60 days and start your
                                        deployment journey.
                                    </div>
                                    <div>misc</div>
                                </span>
                                <span>
                                    <div>
                                        Senior Developer Advocate at Blues
                                        Wireless
                                    </div>
                                    <div>jobs</div>
                                </span>
                                <span>
                                    <div>
                                        Technical Writer in Web development
                                    </div>
                                    <div>collabs</div>
                                </span>
                                <span>
                                    <div>Developing a developers community</div>
                                    <div>collabs</div>
                                </span>
                                <span className="create-list">
                                    Create a Listing
                                </span>
                            </div>
                        </section>
                        <section>
                            <header className="header">
                                <h3>#news</h3>
                            </header>
                            <div className="list-body">
                                <span>
                                    <div>
                                        New CSS Features, Facebook’s Facial
                                        Recognition System in the Metaverse, &
                                        more on DevNews!
                                    </div>
                                    <div>1 comment</div>
                                </span>
                                <span>
                                    <div>
                                        WordPress Maintenance Service and How it
                                        Helps Your Website?
                                    </div>
                                    <div>
                                        <span className="new-button">New</span>
                                    </div>
                                </span>
                                <span>
                                    <div>Connecting With Dot</div>
                                    <div>
                                        <span className="new-button">New</span>
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        What You Need to Know about Angular v13
                                    </div>
                                    <div>
                                        <span className="new-button">New</span>
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        Nextazy Solution- Build Simple, Elegant,
                                        And Secure Solutions Using Blockchain
                                        Technology
                                    </div>
                                    <div>
                                        <span className="new-button">New</span>
                                    </div>
                                </span>
                            </div>
                        </section>
                    </aside>
                </Right>
            </div>
=======
        <Container>
           home page
>>>>>>> 33b9aba8b0437826fa5dd23bb616c9bf321ca13d
        </Container>
    );
}
