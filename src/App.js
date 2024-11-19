import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import TileIntroduction from './components/TileIntroduction';
import BasicRules from './components/BasicRules';
import WinningRules from './components/WinningRules';
import ScoringRules from './components/ScoringRules';
import './styles/base/index.css';
import './styles/components/rules.css';
import ScrollToTop from "./components/ScrollToTop";

// 创建导航栏组件
function Navigation() {
    const location = useLocation();

    // 如果是首页，则不显示导航栏
    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="nav-logo">Home</Link>
            <div className="nav-buttons">
                <Link to="/tile-introduction" className="nav-button">
                    <span className="button-text">Tiles Introduction</span>
                    {/*<span className="button-subtext">Introduction</span>*/}
                </Link>
                <Link to="/basic-rules" className="nav-button">
                    <span className="button-text">Basic Rules</span>
                    {/*<span className="button-subtext">Rules</span>*/}
                </Link>
                <Link to="/winning-rules" className="nav-button">
                    <span className="button-text">Winning Categories</span>
                    {/*<span className="button-subtext">Rules</span>*/}
                </Link>
                <Link to="/scoring-rules" className="nav-button">
                    <span className="button-text">Scoring Rules</span>
                    {/*<span className="button-subtext">Rules</span>*/}
                </Link>
            </div>
        </nav>
    );
}

// 主应用组件
function App() {
    return (
        <Router>
            <ScrollToTop />
                <div className="app">
                    <Navigation />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/tile-introduction" element={<TileIntroduction/>}/>
                            <Route path="/basic-rules" element={<BasicRules/>}/>
                            <Route path="/winning-rules" element={<WinningRules/>}/>
                            <Route path="/scoring-rules" element={<ScoringRules/>}/>
                        </Routes>
                    </div>
                </div>
        </Router>
    );
}

export default App;