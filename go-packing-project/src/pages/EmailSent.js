import React from "react";
import "./EmailSent.css";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";

export default function EmailSentPage() {

  const navigate = useNavigate();

  const navigateToList = () => {
    navigate('/packing');
  
  };
    return (
      <>
        <Header />
        <div className="Welcome">
            <h1>Don't forget a thing</h1>
            <p className="email-sent-subheader">Feature to come</p>
            <button id="return-button" onClick={navigateToList}>
              Return to my list
            </button>
        </div>
      
      </>
    );
  }
 