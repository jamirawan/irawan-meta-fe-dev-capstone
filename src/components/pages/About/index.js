import { faLandmark, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const About = () => {
  return (
    <div className="container about">
      <FontAwesomeIcon icon={faLandmark} size="3x" />
      <h2>About Little Lemon</h2>
      <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.

</p>
    </div>
  );
};

export default About;
