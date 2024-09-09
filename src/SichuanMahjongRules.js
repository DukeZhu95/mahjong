import React, {PureComponent} from 'react';
import dicesImage from './Images/Dices.png';
import CommonHand from './commonHand';
import CommonHand2 from "./commonHand2";
import AllTriplets from "./allTriplets";
import PureOneSuit from "./pureOneSuit";
import SevenPairs from "./sevenPairs";
import MeldedHand from "./meldedHand";
import PureTriplets from "./pureTriplets";
import ConcealedSevenPairs from "./concealedSevenPairs";

function SichuanMahjongRules() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>四川麻将规则简介<br/>Introduction of Sichuan Mahjong</h1>

            <section>
                <img src={dicesImage} alt="四川麻将" style={styles.image}/>
                <h2 style={styles.subtitle}>一、基本规则<br/>1. Basic Rules</h2>
                <p>四川麻将是一种流行于中国四川省的麻将玩法。以下是基本的游戏规则：<br/>Sichuan Mahjong is a popular game
                    in Sichuan province, China. Here are the basic rules:</p>
                <ul>
                    <li>使用108张牌，不包括风牌、箭牌和花牌。
                        <br/> Using 108 tiles, not includes Winds, Dragons and Flowers.
                    </li>
                    <br></br>
                    <li>摸牌规则：游戏开始时，需先确认一位先手者为庄家，由庄家投骰子决定起牌位置（两颗骰子的点数之和为摸牌方向，较小的
                        点数为跳过的牌堆数），然后按照逆时针方向依次摸牌。每位玩家须摸13章牌。
                        <br/> Drawing tiles: At the beginning of the game, a player is selected as the dealer, who
                        rolls the dice to determine the starting position of the tiles (the sum of the two dice is the
                        direction of the draw, the smaller number is the number of piles to skip), then draw tiles
                        counterclockwise. Each player draws 13 tiles.
                    </li>
                    <br></br>
                    <li>缺一门：每个玩家需要选择放弃一门花色，不能胡这一门的牌。
                        <br/> One void suit: Each player needs to select a suit to abandon in one round,
                        this suit cannot be included when wins.
                    </li>
                    <br></br>
                    <li>出牌：每位玩家确定好要缺一门的花色后，由庄家开始，逆时针方向依次出牌。每位玩家在自己的回合中，需先摸牌再出牌。
                        <br/> Discarding tiles: After each player has selected the void suit, the dealer starts to
                        discard tiles in a counterclockwise direction. In each player's turn, the player must draw a
                        tile before discarding a tile.
                    </li>
                    <br></br>
                    <li>吃牌：四川麻将不允许吃牌，只能碰、杠。
                        <br/> Only "Pong" & "Kong" are allowed in Sichuan Mahjong.
                    </li>
                    <br></br>
                    <li>碰牌：当玩家手中持有一组对子，其他任一玩家打出第三章相同的牌时，则可选择立即碰牌，碰出的牌须明牌展示在桌面上且
                        不可拿回到手牌中进行组合。碰牌结束后，以碰牌玩家的出牌顺序开始继续进行游戏。
                        <br/> Pong action：When a player has a pair of tiles in hand, and another player discards the
                        third tile of the same kind, the player can choose to “Pong”. The Ponged tiles must be shown
                        on the table and cannot be taken back to the hand. After Pong action, the game continues with
                        the player who Ponged the tile.
                    </li>
                    <br></br>
                    <li>听牌：当玩家手中的牌只差一张即可胡牌时，称为听牌（注：四川麻将听牌无需报明）。
                        <br/> Ready hand: When a player is one tile away from winning, it is called a Ready hand.
                    </li>
                    <br></br>
                    <li>胡牌：玩家进入听牌阶段后，若有其他玩家打出了所听的牌，则听牌玩家可立即胡牌，胡牌后的番数根据胡牌的类型计算并由点炮
                        玩家支付。若听牌玩家在自己的摸牌阶段摸到了所听的牌，则称为自摸胡牌，胡牌后的番数根据胡牌的类型附加额外一倍底注计算，
                        并由场上所有当前未胡牌玩家支付（注：胡牌具有优先权，即当前被胡的牌不可再被碰牌或杠牌）。下局游戏由最先胡牌的玩家坐庄。
                        <br/> Winning: When a player enters the Ready hand stage, if another player discards the tile
                        that the player is waiting for, the player can win instantly. The points of winning are
                        calculated based on the type of winning and paid by the player who discarded the tile. If the
                        player draws the tile that the player is waiting for in the draw stage, it is called a
                        self-drawn
                        win, the points of winning are calculated based on the type of winning and an additional base
                        points, and paid by all the players who have not won yet (Note: Winning has priority, the tile
                        that has been won cannot be Ponged or Konged). The next game will be dealer by the player who
                        wins first.
                    </li>
                    <br></br>
                    <li>一炮多响：当一名玩家打出的牌被多名玩家胡牌时，称为一炮多响。一炮多响时，所有胡牌玩家的番数相加并由点炮玩家支付（注：
                        若此一炮多响为该局游戏的首次胡牌，则下局游戏由点炮玩家坐庄）。
                        <br/> Multiple winners: When a tile discarded by a player is won by multiple players, it is
                        called multiple winners. The points of all winners are added together and paid by the player
                        who discarded the tile (Note: If this is the first win in the game, the next game will be
                        dealer by the player who discarded the tile).
                    </li>
                    <li>血战到底：即一局中只要还有未胡牌的玩家，游戏就不会结束。
                        <br/> Blood-battle Mode: current round will not be ended when still has players does not win
                        (excepting drawn).
                    </li>
                    <br></br>
                    <li>相公陪打：正常情况下，玩家在摸牌阶段结束后共有14章牌，若有玩家在摸牌阶段结束后手中的牌不为14章，则称为相公（不足14章
                        为“小相公”；超过14章为“大相公”）。相公玩家不得更改当前的牌数，需继续游戏直至所有其他玩家胡牌或流局；相公玩家无法听牌
                        、胡牌，但仍可碰牌、杠牌。
                        <br/> Dead Hand: Normally, each player has 14 tiles after the draw stage, if a player has
                        less/more  than 14 tiles, it is called a Dead Hand (less than 14 tiles is called "Small Dead
                        Hand"; more than 14 tiles is called "Big Dead Hand"). Dead Hand player cannot change the number
                        of tiles, must continue the game until all other players win or drawn; Dead Hand player cannot
                        Ready hand or win, but still can Pong or Kong.
                    </li>
                    <br></br>
                    <li>流局查叫、查花猪：当所有牌均被摸完且最后一名玩家打出的牌无人能胡，则进入流局阶段。此阶段中，若有超过一名玩家未能胡牌，
                        则需立即明牌并检查玩家的听牌与缺一门状况：未能听牌的玩家需赔给已听牌玩家胡牌的最大可能番数，仍然持有弃用花色的玩家需额
                        外赔给所有其他玩家四番。
                        <br/> Drawn Checking: When all tiles are drawn and the last player discards a tile that no one
                        can win, the game enters the drawn stage. In this stage, if more than one player did not win,
                        the tiles must be shown and check the Ready hand and void suit: the player who cannot Ready
                        hand must pay the maximum possible points to the player who can Ready hand, the player who
                        still has the void suit must pay four points to all other players.
                    </li>
                    <br></br>
                    <li>诈胡：玩家在胡牌后，若其胡牌的牌型不符合规则，则称为诈胡。诈胡玩家需立即支付给其他玩家四番，若有其他玩家所胡牌型的最大
                        可能番数高于四番，则需支付所胡牌型的最大可能番数。
                        <br/> False Win: When a player wins, if the type of winning does not meet the rules, it is
                        called a False Win. The player who False Win must pay four points to all other players, if the
                        maximum possible points of the type of winning that other players can win are higher than four
                        points, the player must pay the maximum possible points.
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
                    <PureTriplets /> {/* 在这里插入 pureTriplets 组件 */}
                    {/*<li>将对：碰碰胡的胡牌形态，且全部都由“2、5、8”数字组成。</li>*/}
                    <li>龙七对：七对子的胡牌形态，其中有四张相同的牌，不另计根数。</li>
                    <ConcealedSevenPairs /> {/* 在这里插入 concealedSevenPairs 组件 */}
                    <li>清七对：清一色 + 七对子组成的胡牌。</li>
                    <li>清金钩钓：清一色 + 碰碰胡组成的胡牌。</li>
                    <li>双龙七对：七对子的胡牌形态，其中有两组四张相同的牌，不另计根数。</li>
                    <li>清龙七对：七对子 + 清一色的胡牌形态，其中有两组四张相同的牌，不另计根数与清一色。</li>
                </ul>

                <p>以下为极品牌型，一般情况下一律按封顶番数计算：</p>
                <ul>
                    <li>绿一色：仅使用二、三、四、六、八条组成的胡牌形态，不另计清一色。</li>
                    <li>十八罗汉：胡牌时有四个杠，不另计金钩钓。</li>
                    <li>连七对：由数字连续的七对子组成的胡牌，不另计清一色与七对子。</li>
                    <li>九莲宝灯：由“1112345678999”另加任意一张相同花色的牌组成的胡牌形态，不另计清一色。</li>
                    <li>三龙七对：七对子的胡牌形态，其中有三组四张相同的牌，不另计根数。</li>
                    <li>清双龙七对：双龙七对 + 清一色的胡牌形态，其中有两组四张相同的牌，不另计根数。</li>
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
                    {/*<li>将对：4番。</li>*/}
                    <li>龙七对：5番。</li>
                    <li>清七对：5番。</li>
                    <li>清金钩钓：5番。</li>
                    <li>双龙七对：7番。</li>
                    <li>清龙七对：7番。</li>
                </ul>

                <p>刮风下雨：四川麻将的特色玩法，即当有玩家杠牌时，其他玩家须按照杠牌的形式计算番数并立刻结算</p>
                <ul>
                    <li>刮风（明杠）：当玩家持有一组刻子，其他任一玩家打出第四章牌时，则可立即杠牌，点杠玩家须立即结算2番给杠牌玩家。</li>
                    <li>刮风（弯杠）：当玩家碰牌后，在自己的摸牌阶段又摸到第四章牌时，则可立即杠牌，场上所有未胡牌玩家须立即结算1番给杠牌玩家（注：若弯杠的牌并非当前摸牌阶段所得，则不进行刮风下雨结算）</li>
                    <li>下雨（暗杠）：当玩家持有一组刻子，在自己的摸牌阶段又摸到第四章牌时，则可立即杠牌，场上所有未胡牌玩家须立即结算2番给杠牌玩家（注：与其他地区玩法不同，四川麻将暗杠须明牌展示）。</li>
                    <li>退税：</li>
                </ul>

                <p>附加计番：</p>
                <ul>
                    <li>根：当玩家胡牌时，牌中有四章一样的牌（无论是否杠出），则称为根，每有一根则另加1番。</li>
                    <li>抢杠胡：其他玩家杠牌时（必须为弯杠），加杠的牌恰巧能够构成胡牌，则此杠作废并视为杠牌方点炮，结算时另加1番。</li>
                    <li>杠上点炮：当玩家杠牌后的补牌阶段结束后，打出的牌被其他玩家胡牌，则视为杠牌方点炮，此杠的刮风下雨所得须立即转移给胡牌玩家
                        （若为一炮多响则须给每位胡牌玩家转移同等的刮风下雨所得），并在结算时另加1番。</li>
                    <li>杠上开花：当玩家杠牌后的补牌阶段恰好摸到了所听的牌，则视为杠牌方自摸胡牌，须在结算时另加2番，并取消自摸加底计算。</li>
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
