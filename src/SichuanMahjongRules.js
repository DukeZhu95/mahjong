import React, {PureComponent} from 'react';
import dicesImage from './Images/Dices.png';
import CommonHand from './commonHand';
import CommonHand2 from "./commonHand2";
import AllTriplets from "./allTriplets";
import PureOneSuit from "./pureOneSuit";
import SevenPairs from "./sevenPairs";
import MeldedHand from "./meldedHand";

function SichuanMahjongRules() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>四川麻将规则简介<br/>Introduction of Sichuan Mahjong</h1>

            <section>
                <h2 style={styles.subtitle}>一、基本规则<br/>1. Basic Rules</h2>
                <p>四川麻将是一种流行于中国四川省的麻将玩法。以下是基本的游戏规则：<br/>Sichuan Mahjong is a popular game
                    in Sichuan province, China. Here are the basic rules:</p>
                <ul>
                    <li>使用108张牌，不包括风牌、箭牌和花牌。<br/> Using 108 tiles, not includes Winds, Dragons and
                        Flowers.
                    </li>
                    <br></br>
                    <li>缺一门：每个玩家需要选择放弃一门花色，不能胡这一门的牌。<br/> One void suit: Each player needs to
                        select a suit to abandon in one round, this suit cannot be included when wins.
                    </li>
                    <br></br>
                    <li>吃牌：四川麻将不允许吃牌，只能碰、杠。 <br/> Only "Pong" & "Kong" are allowed in Sichuan Mahjong.
                    </li>
                    <br></br>
                    <li>血战到底：即一局中只要还有未胡牌的玩家，游戏就不会结束。<br/> Blood-battle Mode: current round will
                        not be ended when still has players does not win (excepting drawn).
                    </li>
                    <br></br>
                    <li>流局查叫、查花猪：流局阶段中，若有超过一名玩家未能胡牌，需检查玩家的听牌与缺一门状况，未能听牌的玩家需赔给已听牌玩家胡牌的最大可能番数，仍然持有弃用花色的玩家需额外赔给所有其他玩家四番。<br/> Drawn
                        Checking: during the drawn stage, if more than 1 player has not win, their tiles must be checked
                        instantly, players who has not entered Ready hand stage need to pay the maximum possible points
                        of winnings to the player who has entering the Ready Hand stage.
                    </li>
                </ul>

                <img src={dicesImage} alt="四川麻将" style={styles.image}/>
            </section>

            <section>
                <h2 style={styles.subtitle}>二、胡牌规则 <br/> 2. Rules of Wining</h2>
                <p>四川麻将的胡牌方式多样。以下是详细的胡牌类型：<br/> There are many kinds of wining types in Sichuan Mahjong, here are the details: </p>
                <ul>
                    <li>平胡：最基本的胡牌类型，牌中包含至少一组顺子即为平胡。</li>
                    <CommonHand /> {/* 在这里插入 commonHand 组件 */}
                    <CommonHand2 /> {/* 在这里插入 commonHand2 组件 */}
                    <li>碰碰胡（大对子）：较为常见的胡牌类型，牌中没有顺子即为碰碰胡。</li>
                    <AllTriplets /> {/* 在这里插入 allTriplets 组件 */}
                    <li>清一色：胡牌时所有牌都是同一花色。</li>
                    <PureOneSuit /> {/* 在这里插入 pureOneSuit 组件 */}
                    <li>七对子：胡牌时牌中有七对牌。</li>
                    <SevenPairs /> {/* 在这里插入 sevenPairs 组件 */}
                    <li>金钩钓：所有的牌均已碰出、杠出，仅剩一张单钓胡牌。</li>
                    <MeldedHand /> {/* 在这里插入 meldedHand 组件 */}
                    <li>清对：清一色 + 碰碰胡组成的胡牌</li>
                    <li>将对：碰碰胡的胡牌形态，且全部都由“2、5、8”数字组成。</li>
                    <li>龙七对：七对子的胡牌形态，其中有四张相同的牌，不另计根数。</li>
                    <li>清七对：清一色 + 七对子组成的胡牌。</li>
                    <li>清金钩钓：清一色 + 碰碰胡组成的胡牌。</li>
                    <li>双龙七对：七对子的胡牌形态，其中有两组四张相同的牌，不另计根数。</li>
                    <li>清龙七对：七对子 + 清一色的胡牌形态，其中有两组四张相同的牌，不另计根数与清一色。</li>
                    <li>抢杠胡：胡牌时抢杠成功。</li>
                    <li>自摸：自己摸到胡牌。</li>
                    <li>杠上开花：杠牌后摸到的牌成胡牌。</li>
                </ul>

                <p>以下为极品牌型，一般情况下一律按封顶番数计算：</p>
                <ul>
                    <li>绿一色：仅使用二、三、四、六、八条组成的胡牌形态，不另计清一色。</li>
                    <li>十八罗汉：胡牌时有四个杠，不另计金钩钓。</li>
                    <li>连七对：由数字连续的七对子组成的胡牌，不另计清一色与七对子。</li>
                    <li>九莲宝灯：由“1112345678999”另加任意一张相同花色的牌组成的胡牌形态，不另计清一色。</li>
                    <li>三龙七对：七对子的胡牌形态，其中有三组四张相同的牌，不另计根数。</li>
                    <li>清双龙七对：双七对 + 清一色的胡牌形态，其中有两组四张相同的牌，不另计根数。</li>
                    <li>清三龙七对：三龙七对 + 清一色的胡牌形态，其中有三组四张相同的牌，不另计根数。</li>
                </ul>
            </section>

            <section>
                <h2 style={styles.subtitle}>三、计分规则 <br/> Points Calculating</h2>
                <p>四川麻将的计分通常采用番数制，若胡牌后的牌型番数为x，对应的赌注的计算公式为：2<sup>x-1</sup></p>
                <p>常见的计番方式如下：</p>
                <ul>
                <li>平胡：1番。</li>
                    <li>碰碰胡：2番。</li>
                    <li>清一色：3番。</li>
                    <li>七对子：3番。</li>
                    <li>金钩钓：3番。</li>
                    <li>清对：4番。</li>
                    <li>将对：4番。</li>
                    <li>龙七对：5番。</li>
                    <li>清七对：5番。</li>
                    <li>清金钩钓：5番。</li>
                    <li>双龙七对：7番。</li>
                    <li>清龙七对：7番。</li>
                </ul>
            </section>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    title: {
        textAlign: 'center',
        color: '#b22222',
    },
    subtitle: {
        color: '#b22222',
    },
    image: {
        maxWidth: '20%',
        height: 'auto',
        display: 'block',
        margin: '10px auto',
    }
};

export default SichuanMahjongRules;
