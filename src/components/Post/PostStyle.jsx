import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(239, 239, 239);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid red;
  .postContainer {
    max-width: 1260px;
    margin: auto;
    display: flex;
    border: 1px solid red;
  }
  .postS {
    width: 70%;
    border: 1px solid red;
  }
  nav {
    display: flex;
    justify-content: space-between;
    height: 55px;
  }
  .devLogo {
    display: flex;
    width: 120px;
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
    /* overflow-y: auto; */
  }
  .editsection {
    width: 100%;
    height: 75vh;
    /* overflow-y: auto; */
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
    border: 1px solid red;
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
    border: 1px solid red;
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
`;
