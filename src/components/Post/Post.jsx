import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrap } from "./PostStyle.jsx";
import { RiImageAddFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export const Post = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
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
              <div>Create Post</div>
            </div>
            <div className="change">
              <div className="edit">Edit</div>
              <div className="preview">Preview</div>
            </div>
          </nav>
          <div className="postWrapper">
            <div className="editsection">
              <div className="addImg">
                <input type="file" />
                <div className="addCover">Add a cover image</div>
              </div>
              {progress1 === 50 ? (
                <div className="coverImg">
                  <img src="" alt="" />
                  <div className="change">Change</div>
                  <div className="remove">Remove</div>
                </div>
              ) : (
                <div className="loadImg">
                  <div className="loader"></div>
                  <span>Uploading...</span>
                </div>
              )}
              {/*Title input */}
              <div className="title">
                <textarea
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
                />
              </div>
              <div className="uploadImg2">
                <input type="file" />
                {progress2 === 50 || progress1 === 0 ? (
                  <div className="upload">
                    <RiImageAddFill /> Upload image
                  </div>
                ) : (
                  <div className="load">
                    <div className="loader"></div>
                    <span>Uploading...</span>
                  </div>
                )}
                {url2 && (
                  <div className="clipboard">
                    <input type="text" value={url2} readOnly />
                    <div className="copy">
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
                  rows="8"
                />
              </div>
            </div>
            <div className="preview">
              <img src={url1} alt="" />
              <h1>{}</h1>
              <p></p>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} children={""} />
            </div>
          </div>
          <div className="publish">
            <div className="save">Publish</div>
          </div>
        </div>
        <div className="rightBar"></div>
      </div>
    </Wrap>
  );
};
