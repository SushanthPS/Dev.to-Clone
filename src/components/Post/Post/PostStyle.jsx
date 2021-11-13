import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(239, 239, 239);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* border: 1px solid red; */
  .postContainer {
    max-width: 1260px;
    margin: auto;
    display: flex;
    /* border: 1px solid red; */
  }
  .postS {
    width: 70%;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 55px;
  }
  .devLogo {
    display: flex;

    width: 155px;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
  }

  .change {
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
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-left: 9.5%;
    background-color: white;
    overflow-y: auto;
  }
  .editsection {
    width: 100%;
    height: 75vh;
    overflow-y: auto;
  }
  .addImg {
    width: 85%;
    margin: auto;
    padding: 30px 0;
    padding-bottom: 20px;
  }
  .addCover {
    display: inline-block;
    padding: 8px 12px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  .coverImg {
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
    .remove {
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
      text-shadow: 1.5px 0;
      margin-bottom: 10px;
      letter-spacing: 1.5px;
      border: none;
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
    /* border: 1px solid red; */
    & textarea {
      height: 30px;
      width: 100%;
      font-size: 16px;
      letter-spacing: 1.5px;
      border: none;
      resize: none;
      margin-bottom: 20px;
      overflow-y: hidden;
      &::placeholder {
        color: rgb(80, 80, 80);
      }
      &:focus {
        outline: none;
      }
    }
  }
  .uploadImg2 {
    display: flex;
    /* border: 1px solid red; */
    height: 55px;
    background-color: rgb(249, 249, 249);
  }
  .upload {
    /* border: 1px solid blue; */
    min-width: 20%;
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
    //remaining css
  }
  .markDown {
    width: 85%;
    /* border: 1px solid red; */
    margin: 20px auto;
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
  .publish {
    /* border: 1px solid red; */
    height: 80px;
    width: 80%;
    display: flex;
    align-items: center;
    margin: auto;
    & .save {
      padding: 10px 15px;
      font-weight: 500;
      letter-spacing: 0.5px;
      cursor: pointer;
      border-radius: 8px;
      background-color: rgb(59, 73, 230);
      color: white;
    }
  }
  //preview section
  .preview {
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
  .loadImg {
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
  .rightBar {
    width: 26%;
    margin: auto;
    overflow-y: auto;
  }
  .titleHelp {
    position: fixed;
    width: 24%;
    visibility: hidden;
    transition: visbility 50ms ease-in-out;
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
  .appear1 {
    visibility: visible;
    top: 150px !important;
    transition: 300ms ease-in-out;
  }
  .tagHelp {
    position: fixed;
    width: 24%;
    visibility: hidden;
    transition: visbility 50ms ease-in-out;
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
  .appear2 {
    visibility: visible;
    top: 220px !important;
    transition: 300ms ease-in-out;
  }
  .markDownHelp {
    position: fixed;
    width: 24%;
    visibility: hidden;
    transition: visbility 50ms ease-in-out;
    top: 320px;
    & h4 {
      font-size: 18px;
      margin: 10px 0;
    }
    & ul {
      padding: 0;
      max-height: 75vh;
      list-style: none;
      overflow-y: scroll;
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
        .dropdown {
          transform: rotate(0deg) !important;
        }
      }
    }
    .title {
      margin-top: 80px;
    }
  }
  .appear3 {
    visibility: visible;
    top: 350px !important;
    transition: 300ms ease-in-out;
  }
  .dropDown {
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
  .showInst {
    display: none !important;
  }
`;
