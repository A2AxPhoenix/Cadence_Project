const UserDisplay = ({}) => {
    return (
        <div className="userdisplay-container">
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <button
                className="interactable"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => console.log("Image button clicked!")}
              >
                <img className="ellipse" alt="Ellipse" src="/ellipse-4.svg" />
                <img className="red" alt="Red" src="/red-304570-640-1@2x.png" />
              </button>
              <button
                className="interactable"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => console.log("Image button clicked!")}
              >
                <img
                  className="skip-to-start-icon"
                  alt="Skip to start icon"
                  src="/skip-to-start-icon-18-256-1@2x.png"
                />
              </button>
              <button
                className="interactable"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => console.log("Image button clicked!")}
              >
                <img
                  className="skip-to-start-icon-2"
                  alt="Skip to start icon"
                  src="/skip-to-start-icon-18-256-2@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
    );
};

export default UserDisplay;
