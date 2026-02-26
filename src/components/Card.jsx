import { Bookmark } from "lucide-react";
const Card = (props) => {
   
  
  return (
   
    <div className="container">
      <div className="top">
        <img className="top-image" src={props.brandlogo} alt="" />
        <button className="top-button" >
          Save <Bookmark />
        </button>
      </div>
      <div className="center">
        <h3>{props.company}</h3>
        <h2>{props.post}</h2>
        <div className="center-div">
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="botton-div">
          <div>
            <p className="botton-first">${props.pay}/hr</p>
            <p className="botton-second">{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
