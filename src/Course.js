import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import AllWebStudy from "./images/kompleweb.jpg";
import { useState } from "react";
import "./Course.css";

const courseMap = {
  Angular: Angular,
  Boostrap: Boostrap,
  Ccsharp: Ccsharp,
  AllWebStudy: AllWebStudy,
};

function Course({ courseName }) {
  const [showDivs, setShowDivs] = useState(true);

  const handleDelete = () => {
    setShowDivs(false);
  };

  return (
    <div>
      {showDivs && (
        <div className="courseDiv">
          <img className="image" src={courseMap[courseName]} />
          <div className="text">
            <h3>Zafer İntepe</h3>
            <p>
              Ea eiusmod elit nisi laborum pariatur magna in consectetur ad sit
              ex est mollit. Ut dolore mollit ea ex proident velit tempor qui
              amet Lorem laborum. Eiusmod minim nisi cillum eu occaecat
              adipisicing.
            </p>
            <hr />
            <div className="element">
              <div className="inputsOne">
                <div className="elements">
                  <input type="checkbox" />
                  <p>Paylaş</p>
                </div>
                <div className="elements">
                  <input type="checkbox" />
                  <p>Hedi Et</p>
                </div>
                <div className="elements">
                  <input type="checkbox" />
                  <p>Satın Al</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="inputsTwo">
                <p>
                  Duis sit esse ad proident sunt minim esse Lorem ad id ex
                  reprehenderit enim culpa. Ullamco qui elit aute amet aute
                  fugiat consequat irure elit pariatur.
                </p>
              </div>
            </div>
          </div>
          <button className="delete" onClick={handleDelete}>
            Kursu Sil
          </button>
          <p className="copy">Copy Right Zafer İntepe © | Licence MIT</p>
        </div>
      )}
    </div>
  );
}

export default Course;
