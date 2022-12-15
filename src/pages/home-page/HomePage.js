import React from "react";
import "./Home-page.scss";

export default function HomePage()
{
    return(
        <section className="home-page">
            <div className="home-page--main-content">
                <div className="home-page--description">
                    <h1 className="home-page--title">
                        The Whole World in One Place
                    </h1>
                    <h2 className="home-page--post-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan leo a leo fermentum molestie.
                    </h2>
                </div>
                <div className="home-page--login-buttons">
                    <button className="home-page--login-btn">
                        <a href="/main-page">
                            Sign In
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}