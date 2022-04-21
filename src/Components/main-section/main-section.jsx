import "./main-section.styles.scss";
import greenSoap from "../../assets/green-soap.png";

export default function MainSection({ history }) {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={greenSoap} alt="greensoap" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for sensetive skin.</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => {
              history.push("/product/1");
            }}
          >
            Green Soap
          </button>
        </div>
      </div>
    </div>
  );
}

