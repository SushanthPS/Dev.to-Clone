import  styled  from 'styled-components';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import heart from "../images/hearts.svg"
import comment from "../images/comment.svg"

export default function SearchArticles() {

    const params = useParams();
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
            
            axios.get(`https://dev.to/api/articles/?tag=${params.query}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
        }, [])
    

    return (
        <Container>
            <div className="navComponent">
                <div className="col1"><h1>Search results for { params.query}</h1></div>
                <div className="col2">
                    <div className="sort">
                       <span>  <strong> Most Relevant</strong></span>
                       <span> Newest</span>
                       <span> Oldest</span>
                    </div>
                </div>
            </div>
            <div className="mainBody">
                <div className="forNavigation">
                    <div className="dummyNavigation">
                        <p className="posts"> <strong> Posts</strong></p>
                        <p>Podcasts</p>
                        <p>People</p>
                        <p>Comments</p>
                        <p>My posts only</p>
                    </div>
                </div>
                <div className="blogsDiv">
                    <div className="blogs">

                        {
                            data.map((e) => {
                                return <Card>
                                    <div className="profile">
                                        <div className="profileImg">
                                            <img src={ e.user.profile_image} alt="" />
                                        </div>
                                        <div className="profileDetail">
                                            <span>{ e.user.name }</span><br />
                                            <span> { e.readable_publish_date}</span>
                                        </div>
                                    </div>
                                    <div className="cardDetails">
                                       <h2>{e.title}</h2>
                                        <span>#{e.tag_list.join("  #")}</span>
                                        <div className="reactionCommentSave">
                                            <div className="reactionCommentDiv">
                                                <div className="reactionComment">
                                                    <div className="flexDiv">
                                                        <div className="imageDiv">
                                                           <img src={heart } alt="" />
                                                        </div>
                                                        <div className="spanDiv">
                                                          <span>{1+e.positive_reactions_count } reactions </span>
                                                        </div>
                                                    </div>
                                                    <div className="flexDiv">
                                                        <div className="imageDiv">
                                                           <img src={ comment} alt="" />
                                                        </div>
                                                        <div className="spanDiv">
                                                          <span>{1+e.comments_count } comments </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="save">
                                                <span>{e.reading_time_minutes} min read</span>
                                                <div className="saveDiv"> save</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Card>
                            })
                        }
                        
                    </div>
                </div>
            </div>
 
        </Container>
    )
}

const Card = styled.div`
background-color: white;
    padding:2.5%;
    border: 1px solid rgb(216,216,216);
    margin-bottom: 10px;
    border-radius: 8px;
    .profile{
        width: 250px;
        display:flex;
        justify-content: space-between;
        height:35px;

        .profileImg{
            flex-basis:15%;
            
             img{
                 width:100%;
                 height:100%;
                 border-radius: 50%;
             }
        }
 
        .profileDetail{
         flex-basis: 80%;
          color:#717171;
          span{
              font-size: 14px;
          }
         
        }
    }

    .cardDetails{
        
        margin-left: 50px;
       
        .reactionCommentSave{
          width:100%;
          /* border: 1px solid red; */
          margin-top: 2%;
        
          display: flex;

          .reactionCommentDiv{
            flex-basis: 75%;
            /* border: 1px solid red; */
              
              .reactionComment{
                  width:55%;
                  display: flex;
                  justify-content: space-between;
                  /* border:1px solid red; */
                    .flexDiv{
                        flex-basis: 45%;
                        height:30px;
                        /* border:1px solid red; */
                        display: flex;
                        justify-content: space-between;
                        .imageDiv{
                         
                            flex-basis: 25%;
                            /* border:1px solid red; */
                            img{
                                width:30px;
                                height:30px;
                            }
                        }
                        .spanDiv{
                          flex-basis: 75%;
                        }

                    }
                   
               }

            }

            .save{
                flex-basis:25%;
                /* border: 1px solid red; */

                .saveDiv{
                    background-color:rgb(214,214,215);
                    margin-left: 10px;
                    border-radius: 8px;
                    padding:4%;
                    /* border: 1px solid red; */
                    display: inline;
                }
            }

        }
    }


`;

const Container = styled.div`
    width:100%;
    position:sticky;
    top:57px;
    z-index:-10;
    margin-bottom: 500px;
    background-color: rgb(239,239,239);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     /* margin-bottom: 100px; */
    .navComponent{
        width:100%;
        /* border:1px solid red; */
        display: flex;
        .col1{
            flex-basis: 66%;
            /* border:1px solid red; */

            h1{
                margin-left: 160px;
            }

        }
        .col2{
            flex-basis: 34%;
            /* border:1px solid red; */
            align-items: center;
        
            .sort{
                
                width:53%;
                padding:7%;
                display: flex;
                justify-content: space-between;
                /* border:1px solid red; */

                strong{
                    font-weight: 700;
                }
                
            }
        }

    }
    
    .mainBody{
        width:100%;
        display: flex;
        justify-content: space-between;
        .forNavigation{
            flex-basis: 30%;
            /* border: 1px solid red; */
            .dummyNavigation{
                margin-left: 43%;
                padding:0 2%;
               
                .posts{
                    padding: 4%;
                    background-color: white;
                    border-radius: 6px;
                    margin-top: 0% ;
                }

            }
        }
        .blogsDiv{
            flex-basis: 68%;
            /* border: 1px solid red; */
            .blogs{
                width:82%;
                
            }

        }
    }
`;

