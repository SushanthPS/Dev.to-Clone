import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: block;
    margin: 8px;
    min-height: 500px;

    .tv-outer {
        display: table;
        position: absolute;
        height: 98%;
        width: 98%;
    }

    .tv-middle {
        display: table-cell;
        vertical-align: middle;
        position: relative;
    }

    .tv-inner {
        max-width: 85%;
        width: 300px;
        border: 25px solid rgb(54, 55, 124);
        border-radius: 36px;
        margin-left: auto;
        margin-right: auto;
        display: table;
        margin-top: -50px;
    }

    p {
        text-align: center;
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: table;
        font-size: 22px;
        font-weight: 500;
    }
`;

export default function Error() {
    return (
        <Container>
            <div className="tv-outer">
                <div className="tv-middle">
                    <img
                        class="tv-inner"
                        src="https://i.imgur.com/AdvTDlI.jpg"
                        alt="404 not found"
                    />
                    <br />
                    <p class="tv__inner--text">
                        This page does not exist <br />
                        <br />
                        <Link to="/">Return to Home Page</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
