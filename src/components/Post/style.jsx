import styled from "styled-components";

export const PostStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--sideCard-color);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media screen and (max-width: 805px) {
    width: 100%;
    .suggestion {
      display: none;
    }
    nav {
      width: 100%;
    }
    .clipboard {
      margin-right: 12px !important;
    }
    .upload {
      margin-left: 10px !important;
      margin-right: 0px !important;
    }
    .cover {
      & img {
        border: 1px solid rgba(0, 0, 0, 0.1);
        width: 210px !important;
      }
    }
    .load {
      margin-left: 10px !important;
    }
    .adddImg,
    .tags,
    .cover,
    .load,
    .title,
    .tags {
      width: 95% !important;
    }
    .dev {
      margin-left: 5px;
    }
    .switch {
      margin-right: 5px;
    }
    .postWrapper {
      width: 100% !important;
      margin-left: 0 !important;
    }
    .postSide {
      width: 100% !important;
      margin: 0;
    }
    .control {
      margin-left: 8px !important;
    }
    .markdown {
      width: 95% !important;
    }
  }
  .pWrapper {
    max-width: 1260px;
    margin: auto;
    display: flex;
  }
  .postSide {
    width: 70%;
  }
  nav {
    display: flex;
    justify-content: space-between;
    height: 55px;
  }
  .dev {
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
  }
  .switch {
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: space-between;
    & div {
      padding: 8px;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: blue;
      }
    }
  }
  .postWrapper {
    width: 91%;
    height: 75vh;
    border-radius: 5px;
    margin-left: 9.5%;
    background-color: white;
    border-radius: 6px;
    overflow-y: auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .editSection {
    width: 100%;
    height: 75vh;
    overflow-y: auto;
  }
  .adddImg {
    width: 85%;
    margin: auto;
    padding: 30px 0;
    padding-bottom: 20px;
  }
  .aadd {
    display: inline-block;
    padding: 8px 12px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  .cover {
    width: 85%;
    margin: auto;
    padding: 30px 0;
    display: flex;
    align-items: center;
    & img {
      width: 260px;
      height: 120px;
      border-radius: 5px;
      margin-right: 20px;
    }
    .rem {
      padding: 9px 13px;
      cursor: pointer;
      color: red;
      font-weight: 500;
      border-radius: 6px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  .title {
    width: 85%;
    margin: auto;
    & textarea {
      width: 100%;
      min-height: 30px;
      font-size: 45px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      text-shadow: 2px 0;
      letter-spacing: 1.5px;
      border: none;
      margin-bottom: 10px;
      resize: none;
      overflow-y: hidden;
      &::placeholder {
        color: rgb(80, 80, 80);
      }
      &:focus {
        outline: none;
      }
    }
  }
  .tags {
    width: 85%;
    margin: auto;
    & textarea {
      height: 30px;
      width: 100%;
      font-size: 16px;
      letter-spacing: 1.5px;
      border: none;
      margin-bottom: 20px;
      resize: none;
      overflow-y: hidden;
      &::placeholder {
        color: rgb(80, 80, 80);
      }
      &:focus {
        outline: none;
      }
    }
  }
  .uploadImg {
    display: flex;
    width: 100%;
    height: 55px;
    background-color: var(--primary-color-light);
  }
  .upload {
    min-width: 9rem;
    margin-left: 70px;
    display: flex;
    color: rgb(80, 80, 80);
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    margin-right: 15px;
    & svg {
      margin-right: 5px;
      height: 25px;
      width: 25px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  .clipboard {
    width: 62%;
    margin-right: 60px;
    display: flex;
    align-items: center;
    & input {
      width: 79%;
      height: 35px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      margin-right: 5px;
      &:focus {
        outline-color: rgb(59, 73, 223);
      }
    }
    & .copy {
      width: 110px;
      height: 37px;
      display: flex;
      cursor: pointer;
      justify-content: center;
      display: flex;
      background-color: transparent;
      border-radius: 8px;
      align-items: center;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      & svg {
        height: 25px;
        width: 25px;
        margin-right: 10px;
      }
    }
  }
  .markdown {
    width: 85%;
    margin: auto;
    margin-top: 20px;
    & textarea {
      width: 100%;
      resize: none;
      font-size: 18px;
      border: none;
    }
    & :focus {
      outline: none;
    }
  }
  .control {
    width: 80%;
    height: 80px;
    display: flex;
    align-items: center;
    margin: auto;
    & .save {
      padding: 10px 15px;
      font-weight: 500;
      letter-spacing: 0.5px;
      cursor: pointer;
      color: white;
      border-radius: 8px;
      background-color: rgb(59, 73, 230);
    }
  }
  //preview section
  .previewSection {
    width: 85%;
    margin: auto;
    background-color: white;
    height: 75vh;
    & img {
      width: 100%;
    }
    & img svg {
      width: 30px;
      height: 30px;
    }
    & a {
      display: inline-block;
    }
  }
  .line {
    font-weight: 500;
    box-shadow: 0px 3px blue;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  .hide {
    display: none !important;
  }
  .load {
    width: 150px;
    margin-left: 65px;
    padding: 30px 0;
    display: flex;
    align-items: center;
    & span {
      font-size: 16px;
      letter-spacing: 0.5px;
      margin-left: 10px;
    }
  }
  .loader {
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top: 3px solid #3498db;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  //suggestion side
  .suggestion {
    width: 26%;
    margin: auto;
    overflow-y: auto;
  }
  .titleHelp {
    position: fixed;
    width: 24%;
    visibility: hidden;
    transition: vissibility 50ms ease-in-out;
    top: 100px;
    & h4 {
      font-size: 18px;
      margin: 10px 0;
    }
    & ul {
      padding: 0;
      list-style: none;
      margin: 0;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      & li {
        line-height: 23px;
      }
    }
    .title {
      margin-top: 80px;
    }
  }
  .appear {
    visibility: visible;
    top: 150px !important;
    transition: 300ms ease-in-out;
  }
  .titleHelp1 {
    position: fixed;
    width: 24%;
    visibility: hidden;
    transition: vissibility 50ms ease-in-out;
    top: 180px;
    & h4 {
      font-size: 18px;
      margin: 10px 0;
    }
    & ul {
      padding: 0;
      list-style: none;
      margin: 0;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      & li {
        line-height: 23px;
      }
    }
    .title {
      margin-top: 80px;
    }
  }
  .appear1 {
    visibility: visible;
    top: 220px !important;
    transition: 300ms ease-in-out;
  }
  .titleHelp2 {
    position: fixed;
    width: 24%;
    visibility: hidden;
    transition: vissibility 50ms ease-in-out;
    top: 320px;
    & h4 {
      font-size: 18px;
      margin: 10px 0;
    }
    & ul {
      padding: 0;
      max-height: 75vh;
      overflow-y: scroll !important;
      list-style: none;
      margin: 0;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      & .li {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      & li {
        line-height: 23px;
        & .drop {
          display: inline-flex;
          transform: rotate(-90deg);
          & svg {
            width: 20px;
            height: 20px;
          }
        }
        .dropR {
          transform: rotate(0deg) !important;
        }
      }
    }
    .title {
      margin-top: 80px;
    }
  }
  .appear2 {
    visibility: visible;
    top: 350px !important;
    transition: 300ms ease-in-out;
  }
  .hi {
    top: 0 !important;
  }
  .hints {
    width: 100%;
    margin-top: 5px;
    padding: 5px 0;
    background-color: rgb(249, 249, 249);
    height: 62vh;
    margin-bottom: 5px;
    & img {
      width: 100%;
    }
  }
  .lu {
    display: none !important;
  }
`;
