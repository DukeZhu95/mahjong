import React from 'react';
import MJS1Image from '../Images/MJs1.png';
import MJS2Image from '../Images/MJs2.png';
import MJS3Image from '../Images/MJs3.png';
import MJS4Image from '../Images/MJs4.png';
import MJS5Image from '../Images/MJs5.png';
import MJS6Image from '../Images/MJs6.png';
import MJS7Image from '../Images/MJs7.png';
import MJS8Image from '../Images/MJs8.png';
import MJS9Image from '../Images/MJs9.png';
import MJt1Image from '../Images/MJt1.png';
import MJt2Image from '../Images/MJt2.png';
import MJt3Image from '../Images/MJt3.png';
import MJt4Image from '../Images/MJt4.png';
import MJt5Image from '../Images/MJt5.png';
import MJt6Image from '../Images/MJt6.png';
import MJt7Image from '../Images/MJt7.png';
import MJt8Image from '../Images/MJt8.png';
import MJt9Image from '../Images/MJt9.png';
import MJw1Image from '../Images/MJw1.png';
import MJw2Image from '../Images/MJw2.png';
import MJw3Image from '../Images/MJw3.png';
import MJw4Image from '../Images/MJw4.png';
import MJw5Image from '../Images/MJw5.png';
import MJw6Image from '../Images/MJw6.png';
import MJw7Image from '../Images/MJw7.png';
import MJw8Image from '../Images/MJw8.png';
import MJw9Image from '../Images/MJw9.png';
import mahjongImage from "../Images/mahjong.png";

function TileIntroduction() {
    const characters = [
        {
            number: 1,
            image: MJw1Image,
            nameCN: "一万",
            nameEN: "One of Characters",
            description: "一万代表数字1，是万子牌中最小的一张。"
        },
        {number: 2, image: MJw2Image, nameCN: "二万", nameEN: "Two of Characters", description: "二万代表数字2。"},
        // ... 其他万子牌
        {number: 3, image: MJw3Image, nameCN: "三万", nameEN: "Three of Characters", description: "三万代表数字3。"},
        {number: 4, image: MJw4Image, nameCN: "四万", nameEN: "Four of Characters", description: "四万代表数字4。"},
        {number: 5, image: MJw5Image, nameCN: "五万", nameEN: "Five of Characters", description: "五万代表数字5。"},
        {number: 6, image: MJw6Image, nameCN: "六万", nameEN: "Six of Characters", description: "六万代表数字6。"},
        {number: 7, image: MJw7Image, nameCN: "七万", nameEN: "Seven of Characters", description: "七万代表数字7。"},
        {number: 8, image: MJw8Image, nameCN: "八万", nameEN: "Eight of Characters", description: "八万代表数字8。"},
        {
            number: 9,
            image: MJw9Image,
            nameCN: "九万",
            nameEN: "Nine of Characters",
            description: "九万代表数字9，是万子牌中最大的一张。"
        },
    ];

    const stipe = [
        {
            number: 1,
            image: MJS1Image,
            nameCN: "一条",
            nameEN: "One of Stipe/Bamboo",
            description: "一条通常用一只孔雀表示。"
        },
        {number: 2, image: MJS2Image, nameCN: "二条", nameEN: "Two of Stipe/Bamboo", description: "二条显示两根竹子。"},
        // ... 其他条子牌
        {
            number: 3,
            image: MJS3Image,
            nameCN: "三条",
            nameEN: "Three of Stipe/Bamboo",
            description: "三条显示三根竹子。"
        },
        {number: 4, image: MJS4Image, nameCN: "四条", nameEN: "Four of Stipe/Bamboo", description: "四条显示四根竹子。"},
        {number: 5, image: MJS5Image, nameCN: "五条", nameEN: "Five of Stipe/Bamboo", description: "五条显示五根竹子。"},
        {number: 6, image: MJS6Image, nameCN: "六条", nameEN: "Six of Stipe/Bamboo", description: "六条显示六根竹子。"},
        {
            number: 7,
            image: MJS7Image,
            nameCN: "七条",
            nameEN: "Seven of Stipe/Bamboo",
            description: "七条显示七根竹子。"
        },
        {
            number: 8,
            image: MJS8Image,
            nameCN: "八条",
            nameEN: "Eight of Stipe/Bamboo",
            description: "八条显示八根竹子。"
        },
        {number: 9, image: MJS9Image, nameCN: "九条", nameEN: "Nine of Stipe/Bamboo", description: "九条显示九根竹子。"},
    ];

    const dots = [
        {number: 1, image: MJt1Image, nameCN: "一筒", nameEN: "One of Dots", description: "一筒显示一个圆点。"},
        {number: 2, image: MJt2Image, nameCN: "二筒", nameEN: "Two of Dots", description: "二筒显示两个圆点。"},
        // ... 其他筒子牌
        {number: 3, image: MJt3Image, nameCN: "三筒", nameEN: "Three of Dots", description: "三筒显示三个圆点。"},
        {number: 4, image: MJt4Image, nameCN: "四筒", nameEN: "Four of Dots", description: "四筒显示四个圆点。"},
        {number: 5, image: MJt5Image, nameCN: "五筒", nameEN: "Five of Dots", description: "五筒显示五个圆点。"},
        {number: 6, image: MJt6Image, nameCN: "六筒", nameEN: "Six of Dots", description: "六筒显示六个圆点。"},
        {number: 7, image: MJt7Image, nameCN: "七筒", nameEN: "Seven of Dots", description: "七筒显示七个圆点。"},
        {number: 8, image: MJt8Image, nameCN: "八筒", nameEN: "Eight of Dots", description: "八筒显示八个圆点。"},
        {number: 9, image: MJt9Image, nameCN: "九筒", nameEN: "Nine of Dots", description: "九筒显示九个圆点。"},
    ];

    return (
        <div className="mahjong-rules">
            <div className="mahjong-subtitle">
                <div className="mahjong-subtitle-cn">牌名介绍</div>
                <div className="mahjong-subtitle-en">Introduction of Mahjong Tiles</div>
            </div>

            <img src={mahjongImage} alt="四川麻将" className="mahjong-image"/>

            <div className="mahjong-description">
                <div className="mahjong-list-item">
                    <div className="mahjong-list-item-cn">*游戏共使用108张牌，不包括风牌、箭牌和花牌，仅包含筒、条、万三种花色。</div>
                    <div className="mahjong-list-item-en">*The game using 108 tiles in total, not includes Winds, Dragons and
                        Flowers, only includes 3 suits named Characters, Stipes(Bamboos) and Dots.
                    </div>
                </div>
            </div>

                <div className="mahjong-content">
                    <section className="tiles-section">
                        <h3 className="tiles-category">
                            <span className="category-cn">万子牌</span>
                            <span className="category-en">Characters</span>
                        </h3>
                        <div className="tiles-grid">
                            {characters.map((tile) => (
                                <div key={tile.nameCN} className="tile-item">
                                    <img
                                        src={tile.image}
                                        alt={tile.nameCN}
                                        className="tile-image"
                                    />
                                    <div className="tile-info">
                                        <div className="tile-name-cn">{tile.nameCN}</div>
                                        <div className="tile-name-en">{tile.nameEN}</div>
                                        <div className="tile-description">{tile.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 类似的部分用于条子和筒子 */}
                    <section className="tiles-section">
                        <h3 className="tiles-category">
                            <span className="category-cn">条子牌</span>
                            <span className="category-en">Stipe/Bamboo</span>
                        </h3>
                        <div className="tiles-grid">
                            {stipe.map((tile) => (
                                <div key={tile.nameCN} className="tile-item">
                                    <img
                                        src={tile.image}
                                        alt={tile.nameCN}
                                        className="tile-image"
                                    />
                                    <div className="tile-info">
                                        <div className="tile-name-cn">{tile.nameCN}</div>
                                        <div className="tile-name-en">{tile.nameEN}</div>
                                        <div className="tile-description">{tile.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="tiles-section">
                        <h3 className="tiles-category">
                            <span className="category-cn">筒子牌</span>
                            <span className="category-en">Dots</span>
                        </h3>
                        <div className="tiles-grid">
                            {dots.map((tile) => (
                                <div key={tile.nameCN} className="tile-item">
                                    <img
                                        src={tile.image}
                                        alt={tile.nameCN}
                                        className="tile-image"
                                    />
                                    <div className="tile-info">
                                        <div className="tile-name-cn">{tile.nameCN}</div>
                                        <div className="tile-name-en">{tile.nameEN}</div>
                                        <div className="tile-description">{tile.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            );
            }

            export default TileIntroduction;