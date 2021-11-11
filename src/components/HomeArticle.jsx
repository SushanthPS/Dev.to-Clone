import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.article`
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(9, 9, 9, 0.1);
    margin: 0 0 0.5rem;
    position: relative;
    border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
        0.375rem;
    box-sizing: border-box;
    background: #fff;

    a {
        color: inherit;
        text-decoration: inherit;
        pointer-events: none;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .story {
        padding: 1.25rem;
        display: block;
    }

    .story-top {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .story-top > div {
        display: flex;
        align-items: center;
        line-height: 1.25;
        font-size: 0.875rem;
    }

    .logo {
        position: relative;
        margin-right: 0.5rem;
        box-sizing: border-box;
    }

    .logo > div {
        width: 2rem;
        height: 2rem;
        display: inline-block;
        border-radius: 100%;
        position: relative;
        background-color: #717171;
        overflow: hidden;
        vertical-align: middle;
        flex-shrink: 0;
    }

    .logo-image {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        display: inline-block;
        vertical-align: bottom;
    }

    .logo-image::after {
        content: "";
        border: 1px solid;
        opacity: 0.15;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 100%;
        pointer-events: none;
    }

    .name {
        display: inline-block;
        margin-bottom: 0;
        position: relative;
        font-weight: 500;
        padding: 6px 2px;
        border-radius: 5px;
    }

    .name > p {
        font-size: 0.875rem;
        padding: 0.25rem;
        margin: calc(0.5rem * -1) calc(0.25rem * -1);
    }

    .time {
        font-size: 0.75rem;
        color: #717171;
    }

    .test {
        text-align: left;
    }

    .story-down {
        padding-left: 2.5rem;
        box-sizing: border-box;
    }

    .story-down > h3 {
        margin-bottom: 0.5rem;
        color: #090909;
        line-height: 1.25;
        font-size: 1.5rem;
        overflow-wrap: anywhere;
        word-break: break-word;
        margin-top: 0px;
    }

    .tags {
        margin-bottom: 0.5rem;
        margin-left: calc(0.25rem * -1);
        box-sizing: border-box;
    }

    .onetag {
        font-size: 0.875rem;
        color: #717171;
        line-height: 1.3;
        border-radius: 0.375rem;
        padding: 0.25rem;
        display: inline-block;
    }

    .reactions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        line-height: 1.25;
        box-sizing: border-box;
    }

    .details {
        display: flex;
        margin-left: calc(0.5rem * -1);
    }

    .save {
        display: flex;
        align-items: center;
    }

    .crayon-button {
        padding: 4px 12px 4px 8px;
        font-size: 0.875rem;
        font-weight: normal;
        background: transparent;
        color: #3d3d3d;
        position: relative;
        display: inline-block;
        border-radius: 0.375rem;
        text-align: center;
        line-height: 1.5rem;
        overflow-wrap: normal;
    }

    .crayon-button:hover {
        background-color: rgba(0, 0, 0, 0.035);
        color: #090909;
    }

    .crayons-icon {
        margin-right: 0.25rem;
        vertical-align: bottom;
    }

    small {
        margin-right: 0.5rem;
        color: #717171;
        box-sizing: border-box;
    }

    .save-button {
        background-color: #d6d6d7;
        padding: 0.45rem 0.75rem;
        font-size: 0.875rem;
        font-weight: normal;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.05);
        position: relative;
        display: inline-block;
        border-radius: 0.375rem;
        text-align: center;
        cursor: pointer;
        overflow-wrap: normal;
        color: #3d3d3d;
    }

    .save-button:hover {
        background-color: #bdbdbd;
    }

    .title:hover {
        color: #3b49df;
    }

    .onetag:hover {
        color: black;
    }

    time:hover {
        color: black;
    }

    .name:hover {
        background-color: rgba(0, 0, 0, 0.035);
    }
`;

export default function HomeArticle({ obj }) {
    return (
        <Container>
            <Link></Link>
            <div className="story">
                <div className="story-top">
                    <div>
                        <div className="logo">
                            <div>
                                <img
                                    className="logo-image"
                                    src={obj.user.profile_image_90}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="test">
                            <div className="name">
                                <p>{obj.user.name}</p>
                            </div>
                            <div className="time">
                                <time dateTime>
                                    {obj.readable_publish_date} (17 hours ago)
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-down">
                    <h3>
                        <span className="title"> {obj.title} </span>
                    </h3>
                    <div className="tags">
                        {obj.tags.split(", ").map((el) => (
                            <span className="onetag">#{el}</span>
                        ))}
                    </div>
                    <div className="reactions">
                        <div className="details">
                            <span className="crayon-button">
                                <svg
                                    class="crayons-icon"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                                </svg>
                                <span className="count">
                                    {obj.positive_reactions_count} Reactions
                                </span>
                            </span>
                            <span className="crayon-button">
                                <svg
                                    class="crayons-icon"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                                </svg>
                                <span className="count">
                                    {obj.comments_count} Comments
                                </span>
                            </span>
                        </div>
                        <div className="save">
                            <small>{obj.reading_time_minutes} min read</small>
                            <button className="save-button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
