import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import coverImg from "../assets/pp.jpeg";
import squidImg from "../assets/squid.png";
import oldManImg from "../assets/oldman.png";
import phoneImg from "../assets/phone.png";
import randy from "../assets/img.png";
import "./Home.css";

export const HomePage = () => {

    const backgroundImgStyle: CSSProperties = {
        backgroundImage: `url(${coverImg})`
    };

    interface IntroBlockProps {
        heading: string;
        icon: string;
    }

    const IntroBlock = (props) => (
        <div className="col-md-4">
            <div className="row">
                <div className="col-3 col-sm-12">
                    <img className="d-icon mx-auto d-block" src={props.icon}></img>
                </div>
                <div className="col">
                    <h3 className="pt-2">{props.heading}</h3>
                </div>
            </div>
            <div className="row mt-1">
                <p className="col px-4">
                    {props.children}
                </p>
            </div>
        </div>
    );

    return (
        <div className="homepage">
            <div className="row">
                <div className="hero" style={backgroundImgStyle}></div>
            </div>
            <div className="row mt-3">
                <div className="col title">
                    <h2>UCLA</h2>
                    <h1>Singaporean Students Association</h1>
                    <h5>Your home to all things Singaporean at UCLA!</h5>
                </div>
            </div>
                <div className="intro-text">
                   <div className="divider" />
                      <h4>About us!</h4>
                      <p>
                      The Singapore Students Association is a student-led organisation that aims to act as a community for Singaporean students at UCLA. We hope to serve as a familiar society that provides support and comfort for students of similar backgrounds thousands of miles away from home. The organisation also hopes to educate students not of Singaporean origin of the culture through sharing and communication between our members and the rest of the UCLA community. We welcome anyone who has lived/studied in Singapore, has Singaporean friends, or who feels connected to Singaporean culture in any way!
                      </p>
                  <div className="divider" />
                </div>
            <div className="row mt-4 directions">
                <IntroBlock heading="New to UCLA?" icon={squidImg} className="introduction">
                    <p>Get oriented with our <Link to="/guide">Sotong Guide</Link> for incoming freshmen and <a href="/auth/facebook">sign up</a> for
                        an account to get access to our resources!</p>
                    <p>
                    Be sure to
                    join our <a target="_blank" href="https://discord.gg/cEk7YuPZ">Discord channel</a> and follow
                    our <a target="_blank" href="https://www.instagram.com/ucla.ssa/">Instagram page</a>. These
                    are our primary means of communication!
                    </p>
                    <p>
                    Do also join the <a target="_blank" href="https://www.facebook.com/groups/122880215014668/">SSA Facebook group</a> and
                    subscribe to our <a target="_blank" href="https://mailchi.mp/868c856a80ab/join-our-ssa-mailing-list">newsletter</a>!
                    </p>
                </IntroBlock>
                <IntroBlock heading="Members/Alumni" icon={oldManImg}>
                    <em>We're still working on this! Let us know if you want any features!</em>
                </IntroBlock>
                <IntroBlock heading="Contact Us" icon={phoneImg}>
                    We're always looking for sponsorship and career opportunities! You can reach us <a href="mailto:exco@uclassa.org">via email</a> or
                    simply drop any of us a message on Facebook!
                </IntroBlock>
            </div>
        </div>
    );
};
