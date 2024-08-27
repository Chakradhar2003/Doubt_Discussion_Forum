import React from 'react'
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom'
import "./css/AllQuestions.css";

function AllQuestions() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
                <p>0</p>
                <span>votes</span>
            </div>
            <div className="all-option">
                <p>0</p>
                <span>Answers</span>
            </div>
            <div className="all-option">
                <small>0 views</small>
            </div>
          </div>
        </div>
            <div className="question-answer">
                <Link>Where was the found 'Your Momma' joke found?</Link>
                <div style = {{
                    width: "90%"
                }}>
                    <div>
                        In Shakespeare's Totus Andronicus.<br/>
                        Demetrius: Villain, what hast thou done?<br/>
                        Aaron: That which thou canst not undo.<br/>
                        Chiron: Thou hast undone our mother. <br/>
                        Aaron: Villain, I have done thy mother.
                    </div>
                </div>
                <div style = {{
                    display:"flex"
                }}>
                    <span className="question-tags">
                        react
                    </span>
                    <span className="question-tags">
                        antd
                    </span>
                    <span className="question-tags">
                        frontend
                    </span>
                    <div className="author">
                        <small>Timestamp</small>
                        <div className="author-details">
                            <Avatar/>
                            <p>Username</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AllQuestions