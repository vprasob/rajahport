import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Rajah Balakrishna </span>
            <br />has studied Bachelors Degree in Commerce 
            (Economics, Cost Accounting & Auditing), Master in Arts (Mass communication & Journalism)
             film technology, acting and has a PhD in cinema (awarded for the thesis ‘Audience 
             reaction & realization in Cinema’), Feature Film Producer Diploma, Certified Cinema 
             Director & Line Producer Emeritus from Hollywood Film Institute, USA Have written 
             articles and books on subjects connected with travels, poetry and filmmaking. 
             He has more then thirty years of experience in Film making and has made many 
             documentaries on Health, public awareness, education & cultural. Has made films on Arab culture & 
             Heritage, cinematography, Edited & Directed 8 documentaries films for UNESCO on subjects 
             connected with the heritage of UAE for including into the list of Living heritage.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Innovation distinguishes between a leader and a follower.”
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
