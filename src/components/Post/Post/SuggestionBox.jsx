import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
export const SuggestionBox = ({ tagStatus, title, markdown }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={`titleHelp ${title && "appear1"}`}>
        <h4>Writing a Great Post Title</h4>
        <ul className="list title-post">
          <li>
            Think of your post title as a super short (but compelling!)
            description — like an overview of the actual post in one short
            sentence.
          </li>
          <li>
            Use keywords where appropriate to help ensure people can find your
            post by search.
          </li>
        </ul>
      </div>
      <div className={`tagHelp ${tagStatus && "appear2"}`}>
        <h4 className="tag">Tagging Guidelines</h4>
        <ul className="list title-post">
          <li>Tags help people find your post.</li>
          <li>
            Think of tags as the topics or categories that best describe your
            post.
          </li>
          <li>
            Add up to four comma-separated tags per post. Combine tags to reach
            the appropriate subcommunities.
          </li>
          <li>Use existing tags whenever possible.</li>
          <li>
            Some tags, such as “help” or “healthydebate”, have special posting
            guidelines.
          </li>
        </ul>
      </div>
      <div
        className={`markDownHelp ${markdown && "appear3"} ${
          show && "dropDown"
        }`}
      >
        <h4>Editor Basics</h4>
        <ul>
          <li>Use Markdown to write and format posts.</li>
          <li className="li" onClick={() => setShow(!show)}>
            <span className={`drop ${show && "dropdown"}`}>
              <TiArrowSortedDown />
            </span>
            Commonly used Syntax
          </li>
          <div className={`hints ${!show && "showInst"}`}>
            <img src="./suggestion.png" alt="" />
          </div>
          <li>
            You can use Liquid tags to add rich content such as Tweets, YouTube
            videos, etc. In addition to images for the post's content, you can
            also drag and drop a cover image
          </li>
        </ul>
      </div>
    </div>
  );
};
