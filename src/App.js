import React, {useState} from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import TileIntroduction from './components/TileIntroduction';
import BasicRules from './components/BasicRules';
import WinningRules from './components/WinningRules';
import ScoringRules from './components/ScoringRules';
import './styles/base/index.css';
import './styles/components/rules.css';
import ScrollToTop from "./components/ScrollToTop";
import { Home as HomeIcon } from 'lucide-react';  // 导入Home图标

// 创建导航栏组件
function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // 如果是首页，则不显示导航栏
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="nav-container">
            {/* 菜单按钮 */}
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </button>

            {/* 导航菜单 */}
            <nav className={`main-nav ${isOpen ? 'nav-open' : ''}`}>
                <Link to="/" className="nav-home" onClick={() => setIsOpen(false)}>
                    <HomeIcon size={24} />
                </Link>

                <div className="nav-buttons">
                    <Link to="/tile-introduction" className="nav-button" onClick={() => setIsOpen(false)}>
                        <span className="button-text">Tiles Introduction</span>
                    </Link>
                    <Link to="/basic-rules" className="nav-button" onClick={() => setIsOpen(false)}>
                        <span className="button-text">Basic Rules</span>
                    </Link>
                    <Link to="/winning-rules" className="nav-button" onClick={() => setIsOpen(false)}>
                        <span className="button-text">Winning Rules</span>
                    </Link>
                    <Link to="/scoring-rules" className="nav-button" onClick={() => setIsOpen(false)}>
                        <span className="button-text">Scoring Rules</span>
                    </Link>
                </div>

                {/* 添加底部图片 */}
                <div className="nav-footer">
                    <img
                        src={require('./Images/table2.png')} // 使用您已有的图片
                        alt="Mahjong"
                        className="nav-footer-image"
                    />
                </div>
            </nav>
        </div>
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