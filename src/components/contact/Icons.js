import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Icons = () => {
  return (
    <div id='iconContainer'>
      <a href='https://github.com/nsinghsidhu12' target='_blank' rel='noreferrer'><FaGithub id='github'/></a>
      <a href='https://ca.linkedin.com/in/noorarjun-sidhu-0b552220a' target='_blank' rel='noreferrer'><FaLinkedin id='linkedin'/></a>
      <a href='mailto:nsidhu73@my.bcit.ca'><FaEnvelope id='email'/></a>
    </div>
  )
}

export default Icons
