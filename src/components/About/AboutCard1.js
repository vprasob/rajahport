import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard1() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* <br />Received the best director award for the film made on human eye from National Orthopedic Council of India and the Lions International. He is a recipient of Karnataka Udyog Award for creating best public awareness films for the Government of Karnataka - India.
<br />
Best Traffic Film from Traffic Police dept. Bangalore, India
<br />
Best Medical Docu-Drama Film  Ophthalmology Council of India
<br />
Best Traffic Film from Traffic Police dept. Hofuf  Saudi Arabia
<br />
First to create & edit a magazine Karnataka Markets, Bangalore India (1980)
<br />
Lions International award for the best public awareness magazine. (1981)
<br />
UNESCO recognition for documentaries make on culture and heritage of the Gulf. */}
         <ul>
            <li className="about-activity">
              <ImPointRight /> Received the best director award for the film made on human eye from National Orthopedic Council of India and the Lions International. He is a recipient of Karnataka Udyog Award for creating best public awareness films for the Government of Karnataka - India.
            </li>
            <li className="about-activity">
              <ImPointRight /> Best Traffic Film from Traffic Police dept. Bangalore, India
            </li>
            <li className="about-activity">
              <ImPointRight /> Best Medical Docu-Drama Film  Ophthalmology Council of India
            </li>
            <li className="about-activity">
              <ImPointRight /> Best Traffic Film from Traffic Police dept. Hofuf  Saudi Arabia
            </li>
            <li className="about-activity">
              <ImPointRight /> First to create & edit a magazine Karnataka Markets, Bangalore India (1980)
            </li>
            <li className="about-activity">
              <ImPointRight /> Lions International award for the best public awareness magazine. (1981)
            </li>
            <li className="about-activity">
              <ImPointRight /> UNESCO recognition for documentaries make on culture and heritage of the Gulf.
            </li>
          </ul>

</p>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard1;
