import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      btnName: "Laman istedi",
      isVisible: true,
    };
  }

  clickButton = () => {
    this.setState({ btnName: "Ozum bilerem" });
  };

  toggleCard = () => {
    this.setState(
        (card) => (
            { isVisible: !card.isVisible }
        ));
  };

  render() {
    const { btnName, isVisible } = this.state;

    return (
      <div className="col-lg-3 m-auto">
        <button 
          onClick={this.toggleCard} 
          className="btn btn-secondary"
        >
          {isVisible ? "Close Card" : "Open Card"}
        </button>

        {isVisible && (
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a
                onClick={this.clickButton}
                href="#"
                className="btn btn-primary"
                id="myButton"
              >
                {btnName}
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Index;
