import React from 'react';
import { Link } from 'react-router-dom';
import tableImage from '../Images/table.png';

function Home() {
    return (
        <div className="home-container">
            <div className="mahjong-title">
                <div className="mahjong-title-cn">四川麻将玩法介绍</div>
                <div className="mahjong-title-en">Introduction of Sichuan Mahjong</div>
            </div>

            <img src={tableImage} alt="四川麻将" className="mahjong-image"/>

            <nav className="home-nav">
                <Link to="/tile-introduction" className="nav-card">
                    <h2>牌名介绍</h2>
                    <p>Mahjong Tiles</p>
                </Link>

                <Link to="/basic-rules" className="nav-card">
                    <h2>基本规则</h2>
                    <p>Basic Rules</p>
                </Link>

                <Link to="/winning-rules" className="nav-card">
                    <h2>胡牌规则</h2>
                    <p>Winning Rules</p>
                </Link>

                <Link to="/scoring-rules" className="nav-card">
                    <h2>计分规则</h2>
                    <p>Scoring Rules</p>
                </Link>
            </nav>
        </div>
    );
}

export default Home;