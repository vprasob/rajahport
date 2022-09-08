import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import './contactpage.css'
function Contact() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function Contact() {
    return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
      <form action="action_page.php">

      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
 
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

      <label for="country">Country</label>
      <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      </select>

      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

      <input type="submit" value="Submit"></input>

        </form>
        </Container>
    </div>
  );
}

export default Contact;