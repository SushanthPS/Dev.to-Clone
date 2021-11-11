import styled from "styled-components";

const Container = styled.footer`
    padding: 2.5%;
    color: #575757;
    position: relative;
    text-align: center;
    background-color: #d6d6d7;
    height: 156px;
    margin-top: 700px;

    .cont {
        max-width: 768px;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr;
        padding: 1rem;
        justify-items: center;
    }

    strong {
        color: black;
        cursor: pointer;
    }

    strong:hover {
        color: #3b49df;
    }

    p {
        font-size: 0.875rem;
        margin: 0px;
    }

    .leaf {
        margin-top: 16px;
    }
`;

export default function Footer() {
    return (
        <Container>
            <div className="cont">
                <p>
                    <strong> DEV Community </strong> – A constructive and
                    inclusive social network for software developers. With you
                    every step of your <br /> journey.
                </p>
                <div>
                    <p>
                        Built on <strong>Forem</strong> — the{" "}
                        <strong>open source </strong> software that powers
                        <strong> DEV </strong> and other inclusive communities.
                    </p>
                    <p>
                        Made with love and <strong> Ruby on Rails </strong> .
                        DEV Community 2016 - 2021.
                    </p>
                    <div className="leaf">
                        <img
                            width="24px"
                            height="24px"
                            src="./Navbar/leaf.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}
