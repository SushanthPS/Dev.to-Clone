import styled from "styled-components";

import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import heart from "../images/heart.svg"
import unicorn from "../images/unicorn.svg"
import bookmark from "../images/bookmark.svg"



function Article() {

   
    const [data, setData] = useState([]);
  
    const [isLoading, setLoading] = useState(true);

    const [tagData, setTagData] = useState([]);
    const [description, setDescription] = useState("");
    // console.log('description:', description)
    
   
  
   
    useEffect(() => {
        axios.get("https://dev.to/api/articles/710577")
        .then((res) => {
            // console.log('res:', res.data)
            setData(res.data)
            setTagData(res.data.tags)
            setLoading(false)
            setDescription(res.data.body_markdown)
        })
        

    },[])
    
  
    

    return isLoading ? (
        "Loading ..."
    ) :  (
        <ArticleDiv className="Article">
                <div className="col1">
                    <div className="icons">
                        <div className="icon">
                            <img src={heart} alt=""/>
                            <p>9</p>
                        </div>
                        <div className="icon">
                            <img src={unicorn} alt=""/>
                            <p>1</p>
                        </div>
                        <div className="icon">
                        <img src={bookmark} alt=""/>
                            <p>4</p>
                        </div>
                    </div>
           </div>
            <div className="col2">
                <div className="coverImageDiv">
                    <img src={data.cover_image } alt="" />
                </div>
                <div className="mainBodyDiv">
                    <div className="profile">
                        <div className="profileImg">
                            <img src={ data.user.profile_image} alt="" />
                        </div>
                        <div className="profileDetail">
                        <strong>{ data.user.name }</strong><br />
                                <span>Posted on { data.readable_publish_date}</span>
                        </div>
                    </div>
                    <h1>{data.title}</h1>

                    
                    {
                        tagData.map((e,i) => {
                            return <span key={i }> #{e} </span>
                        })
                       
                    }
                    
                      
                   <div className="description">
                      <ReactMarkdown>{description}</ReactMarkdown>
                            {/* <p>{description}</p> */}
                   </div>
                     
               
                </div>
            </div>
            <div className="col3">
                <div className="userDetails">
                        <div className="cards">
                            <div className="black"></div>
                            <div className="cardContent">
                                <div className="UserProfile">
                                     <div className="profileImg">
                                         <img src={ data.user.profile_image} alt="" />
                                     </div>
                                     <div className="profileDetail">
                                         <strong>{ data.user.name }</strong><br />                           
                                     </div>
                                </div>
                                <button>Follow</button>
                                <p>I am a software developer that loves going to any extent to make great things happen. I write history with PHP (Laravel), JavaScript (React). I'm a contributor @firefoxDevTools and tutor @udemy.</p>

                                <p className="heading">LOCATION</p>
                                <span className="ans">Nigeria</span>

                                <p className="heading">EDUCATION</p>
                                <span className="ans">B.A</span>

                                <p className="heading">WORK</p>
                                <span className="ans">Software Engineer at Patricia.</span>

                                <p className="heading">JOINED</p>
                                <span className="ans">Jun 10, 2018</span>

                            </div>
                        </div>
                </div>
           </div>
        </ArticleDiv>

        
    );

}

const ArticleDiv = styled.div`
    position:sticky;
    top:57px;
    z-index:-10;
    padding-top:20px;
    padding-bottom:250px;
    width:100%;
    background-color:rgb(239,239,239);
    display:flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   
  .col1{
      flex-basis:9%;
     
      .icons{
         
             margin-left:50px;
             margin-right:28px;
            position: sticky;
            top:125px;
            margin-bottom: 400px;

          .icon{
              
              text-align: center;
              height:80px;

             img{
                 
                 width:60%;
                 height:30px;
                }
                p{
                    margin:0px;
                }
                
              }
           }
       }

    .col2{
      
      flex-basis:61%;
      border-radius: 10px;
      border: 1px solid #D8D8D8;
      
      .coverImageDiv{
        width:100%;
          height:341px;

          img{
              width:100%;
              height:100%;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;

          }
        }

      .mainBodyDiv{
          width:84%;
          padding:8%;
          background-color: white;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
         .profile{
              width: 300px;
              display:flex;
              justify-content: space-between;
              height:45px;

            .profileImg{
                flex-basis:15%;
              
                 img{
                     width:100%;
                     height:100%;
                     border-radius: 50%;
                 }
             }
 
                .profileDetail{
                 flex-basis: 75%;
                  color:#717171;
                 
                 }
           } 

          h1{
              font-size: 48px;
              color:#090909;
              line-height: 60px;
              font-weight: 800px;
             
            }

            .description{
                width:100%;
                overflow-x:hidden;
                

                img{
                    width:100%;
                }
            }
        }
    }

    .col3{
        flex-basis:30%;
        padding-left: 20px;
        padding-right: 50px;
        .userDetails{
            position: sticky;
            top:77px;
            margin-bottom: 200px;
            width:100%;
            background-color: rgb(249,249,249);
         

            .cards{
                border: 1px solid #D8D8D8;
                border-radius: 10px;
                padding-bottom:20px;
                .black{
                    background-color:black;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;

                    height:30px;
                }

                .cardContent{

                    width:100%-20px;
                    padding-left: 20px;
                    padding-right: 20px;
                    .UserProfile{
                        width:300px;
                        display:flex;
                        justify-content: space-between;
                        height:51px;
                        
                        .profileImg{
                        flex-basis:17%;
                            img{
                                margin-top: -15px;
                                width:100%;
                             height:100%;
                             border-radius: 50%;
                            }
                        }
                         .profileDetail{
                             margin-top: 10px;
                         flex-basis: 75%;
                          color:black;
                          strong{
                              font-size: large;

                            }
                        }
                    }
                    
                    button{
                        width:100%;
                        background-color: rgb(50,62,190);
                        color:#f9f9f9;
                        padding:3%;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        border-style: none;
                    }
                    .heading{
                        color:#717171;
                        font-size:12px;
                        font-weight: 700;
                        padding:0px;
                        margin-bottom:0px;
                    }
                    span{
                        color:#242424;
                        font-size:16px;
                        font-weight: 400;
                        padding:0px;
                        margin:0px;
                    }
                  
                }
            }
        }
    }
    `;


export default Article;

