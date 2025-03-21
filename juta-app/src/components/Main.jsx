import React, { Component } from "react";
import Card from "./Card";

export class Main extends Component {
  render() {
    return (
    <div className="bg-gray section pt-50 pb-90">
        <div className="container">
            <div className="row">
                <div className="mt-5">
                    <div className="section-title text-center mb-80">
                        <h2>Our core feature</h2>
                        <p>
                            juta comes with some Powerful features that make Juta easily <br />
                            customizable and scalable.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Card />
            </div>
        </div>
    </div>
    );
  }
}

export default Main;