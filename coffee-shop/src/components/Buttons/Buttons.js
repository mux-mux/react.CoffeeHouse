import { Link } from 'react-router-dom';
import './Buttons.scss';

function Buttons() {
  return (
    <>
      <Link to="/ourCoffee" className="cta">
        More
      </Link>
    </>
  );
}

export default Buttons;
