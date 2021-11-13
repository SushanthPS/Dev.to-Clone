import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrap } from "./PostStyle.jsx";
import { RiImageAddFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { storage } from "./fireBase.js";
import { SuggestionBox } from "./SuggestionBox.jsx";

export const Post = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [edit, setEdit] = useState(true);
  const [tagStatus, setTagStatus] = useState(false);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [markdown, setMarkDown] = useState(false);
  const [markDownText, setMarkDownText] = useState("");
  const Input1 = useRef(null);
  const Input2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    if (image1) {
      handleUpload1();
    }
  }, [image1]);

  useEffect(() => {
    if (image2) {
      handleUpload2();
    }
  }, [image2]);

  const HandleTextChange1 = (e) => {
    setTitleText(e.target.value);
    const t = e.target;
    textRef1.current.style.height = "30px";
    textRef1.current.style.height = `${t.scrollHeight}px`;
  };
  const HandleTextChange2 = (e) => {
    setMarkDownText(e.target.value);
    const t = e.target;
    textRef2.current.style.height = "150px";
    textRef2.current.style.height = `${t.scrollHeight}px`;
  };

  const handleChange1 = (e) => {
    setProgress1(0);
    if (e.target.files[0]) {
      setImage1(e.target.files[0]);
    }
  };

  const handleChange2 = (e) => {
    setProgress2(1);
    if (e.target.files[0]) {
      setImage2(e.target.files[0]);
    }
  };
  const handleUpload1 = () => {
    const uploadTask = storage.ref(`images/${image1.name}`).put(image1);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progresss1 = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (progresss1 > 5454545) console.log("waiting time");
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image1.name)
          .getDownloadURL()
          .then((url1) => {
            setProgress1(100);
            setUrl1(url1);
          });
      }
    );
  };

  const handleUpload2 = () => {
    const uploadTask = storage.ref(`images/${image2.name}`).put(image2);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progresss2 = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (progresss2 !== 0) setProgress2(progresss2);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image2.name)
          .getDownloadURL()
          .then((url) => {
            let i = `![Alt Text](${url})`;
            setUrl2(i);
          });
      }
    );
  };

  const copy = async () => {
    await navigator.clipboard.writeText(url2);
  };

  const handleSubmit = (e) => {};

  return (
    <Wrap>
      <div className="postContainer">
        <div className="postS">
          <nav>
            <div className="devLogo">
              <Link to="/">
                <svg width="50" height="40" viewBox="0 0 50 40" fill="red">
                  <rect
                    width="50"
                    height="40"
                    rx="3"
                    style={{ fill: "black" }}
                  ></rect>
                  <path
                    d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                    style={{ fill: "white" }}
                  ></path>
                </svg>
              </Link>
              <div className="cPost">Create Post</div>
            </div>
            <div className="change">
              <div
                className={`edit ${edit ? "line" : ""}`}
                onClick={() => setEdit(true)}
              >
                Edit
              </div>
              <div
                className={`edit ${!edit ? "line" : ""}`}
                onClick={() => setEdit(false)}
              >
                Preview
              </div>
            </div>
          </nav>
          <div className="postWrapper">
            <div className={`editSection ${!edit && "hide"}`}>
              <div className={`addImg ${image1 ? "hide" : ""}`}>
                <input
                  type="file"
                  ref={Input1}
                  onChange={handleChange1}
                  style={{ display: "none" }}
                />
                <div
                  className="addCover"
                  onClick={() => {
                    Input1.current.click();
                  }}
                >
                  Add a cover image
                </div>
              </div>
              {progress1 === 100 ? (
                <div className={`coverImg ${!image1 ? "hide" : ""}`}>
                  <img src={url1 || ""} alt="" />
                  <div
                    className="addCover"
                    onClick={() => {
                      Input1.current.click();
                    }}
                  >
                    Change
                  </div>
                  <div
                    className="remove"
                    onClick={() => {
                      setImage1(null);
                      setUrl1("");
                      setProgress1(0);
                    }}
                  >
                    Remove
                  </div>
                </div>
              ) : (
                <div className={`loadImg ${!image1 ? "hide" : ""}`}>
                  <div className={`loader ${!image1 ? "hide" : ""}`}></div>
                  <span>Uploading...</span>
                </div>
              )}
              {/*Title input */}
              <div className="title">
                <textarea
                  ref={textRef1}
                  onChange={HandleTextChange1}
                  onClick={() => {
                    setTagStatus(false);
                    setTitle(true);
                    setMarkDown(false);
                  }}
                  required="true"
                  rows="1"
                  placeholder="New post title here..."
                />
              </div>
              {/* tags input */}
              <div className="tags">
                <textarea
                  placeholder="Add upto 4 tags..."
                  rows="1"
                  type="text"
                  onChange={(e) => setTags(e.target.value.split(","))}
                  onClick={() => {
                    setTagStatus(true);
                    setTitle(false);
                    setMarkDown(false);
                  }}
                />
              </div>
              <div className="uploadImg2">
                <input
                  type="file"
                  ref={Input2}
                  onChange={handleChange2}
                  style={{ display: "none" }}
                />
                {progress2 === 100 || progress2 === 0 ? (
                  <div
                    className="upload"
                    onClick={() => {
                      Input2.current.click();
                    }}
                  >
                    <RiImageAddFill /> Upload image
                  </div>
                ) : (
                  <div className="loadImg">
                    <div className="loader"></div>
                    <span>Uploading...</span>
                  </div>
                )}
                {url2 && (
                  <div className="clipboard">
                    <input type="text" value={url2} readOnly />
                    <div className="copy" onClick={copy}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="fc5f15add1e114844f5e"
                      >
                        <title id="fc5f15add1e114844f5e">
                          Copy Markdown for image
                        </title>
                        <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                      </svg>
                      Copied..
                    </div>
                  </div>
                )}
              </div>
              <div className="markDown">
                <textarea
                  placeholder="Write your post content here..."
                  rows="7"
                  ref={textRef2}
                  onChange={HandleTextChange2}
                  onClick={() => {
                    setTagStatus(false);
                    setTitle(false);
                    setMarkDown(true);
                  }}
                />
              </div>
            </div>
            <div className={`preview ${edit && "hide"}`}>
              <img src={url1} alt="" />
              <h1>{titleText}</h1>
              <p>
                {tags.map((e) => (
                  <span style={{ color: "rgba(0,0,0,0.6),marginRight:8" }}>
                    #{e.trim()}
                  </span>
                ))}
              </p>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                children={markDownText}
              />
            </div>
          </div>
          <div className="publish">
            <div className="save" onClick={handleSubmit}>
              Publish
            </div>
          </div>
        </div>
        <div className="rightBar">
          <SuggestionBox
            tagStatus={tagStatus}
            title={title}
            markdown={markdown}
          />
        </div>
      </div>
    </Wrap>
  );
};
