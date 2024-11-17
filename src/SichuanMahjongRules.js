import React from 'react';

import './styles/theme/variables.css';
import './styles/components/rules.css';

import dicesImage from './Images/Dices.png';
import CommonHand from './commonHand';
import CommonHand2 from "./commonHand2";
import AllTriplets from "./allTriplets";
import PureOneSuit from "./pureOneSuit";
import SevenPairs from "./sevenPairs";
import MeldedHand from "./meldedHand";
import PureTriplets from "./pureTriplets";
import ConcealedSevenPairs from "./concealedSevenPairs";
import PureSevenPairs from "./pureSevenPairs";
import PureMeldedHand from "./pureMeldedHand";
import DoubleConcealedSevenPairs from "./doubleConcealedSevenPairs";
import PureConcealedSevenPairs from "./pureConcealedSevenPairs";
import PureGreenHand from "./pureGreenHand";
import FourKongs from "./fourKongs";
import SevenShiftedPairs from "./sevenShiftedPairs";
import NineGates from "./nineGates";
import Example1 from "./example1";
import Example2 from "./example2";

function SichuanMahjongRules() {
    return (
        <div className="mahjong-rules">
            <div className="mahjong-title">
                <div className="mahjong-title-cn">四川麻将规则简介</div>
                <div className="mahjong-title-en">Introduction of Sichuan Mahjong</div>
            </div>

            <section className="mahjong-section">
                <img src={dicesImage} alt="四川麻将" className="mahjong-image"/>
                <div className="mahjong-subtitle">
                    <div className="mahjong-subtitle-cn">一、基本规则</div>
                    <div className="mahjong-subtitle-en">1. Basic Rules</div>
                </div>

                <div className="mahjong-content">
                    <p>
                        <span className="mahjong-text-cn">四川麻将是一种流行于中国四川省的麻将玩法。以下是基本的游戏规则：</span>
                        <span className="english-text">Sichuan Mahjong is a popular game in Sichuan province, China. Here are the basic rules:</span>
                    </p>
                    <ul className="mahjong-list">
                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">使用108张牌，不包括风牌、箭牌和花牌。</div>
                            <div className="mahjong-list-item-en">Using 108 tiles, not includes Winds, Dragons and
                                Flowers.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">摸牌规则：游戏开始时，需先确认一位先手者为庄家，由庄家投骰子决定起牌位置（两颗骰子的点数之和为摸牌方向，较小的点数为跳过的牌堆数），然后按照逆时针方向依次摸牌。每位玩家须摸13章牌。
                            </div>
                            <div className="mahjong-list-item-en">Drawing tiles: At the beginning of the game, a player
                                is selected as the dealer, who rolls the dice to determine the starting position of the
                                tiles (the sum of the two dice is the direction of the draw, the smaller number is the
                                number of piles to skip), then draw tiles counterclockwise. Each player draws 13 tiles.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">缺一门：每个玩家需要选择放弃一门花色，不能胡这一门的牌。
                            </div>
                            <div className="mahjong-list-item-en">One void suit: Each player needs to select a suit to
                                abandon in one round, this suit cannot be included when wins.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">出牌：每位玩家确定好要缺一门的花色后，由庄家开始，逆时针方向依次出牌。每位玩家在自己的回合中，需先摸牌再出牌。
                            </div>
                            <div className="mahjong-list-item-en">Discarding tiles: After each player has selected the
                                void suit, the dealer starts to discard tiles in a counterclockwise direction. In each
                                player's turn, the player must draw a tile before discarding a tile.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">吃牌：四川麻将不允许吃牌，只能碰、杠。</div>
                            <div className="mahjong-list-item-en">Only "Pong" & "Kong" are allowed in Sichuan Mahjong.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">碰牌：当玩家手中持有一组对子，其他任一玩家打出第三章相同的牌时，则可选择立即碰牌，碰出的牌须明牌展示在桌面上且
                                不可拿回到手牌中进行组合。碰牌结束后，以碰牌玩家的出牌顺序开始继续进行游戏。
                            </div>
                            <div className="mahjong-list-item-en">Pong action：When a player has a pair of tiles in hand,
                                and another player discards the third tile of the same kind, the player can choose to
                                “Pong”. The Ponged tiles must be shown on the table and cannot be taken back to the
                                hand. After Pong action, the game continues with the player who Ponged the tile.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">听牌：当玩家手中的牌只差一张即可胡牌时，称为听牌（注：四川麻将听牌无需报明）。
                            </div>
                            <div className="mahjong-list-item-en">Ready hand: When a player is one tile away from
                                winning, it is called a Ready hand.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">胡牌：玩家进入听牌阶段后，若有其他玩家打出了所听的牌，则听牌玩家可立即胡牌，胡牌后的番数根据胡牌的类型计算并由点炮
                                玩家支付。若听牌玩家在自己的摸牌阶段摸到了所听的牌，则称为自摸胡牌，胡牌后的番数根据胡牌的类型附加额外一倍底注计算，
                                并由场上所有当前未胡牌玩家支付（注：胡牌具有优先权，即当前被胡的牌不可再被碰牌或杠牌）。下局游戏由最先胡牌的玩家坐庄。
                            </div>
                            <div className="mahjong-list-item-en">Winning: When a player enters the Ready hand stage, if
                                another player discards the tile that the player is waiting for, the player can win
                                instantly. The points of winning are calculated based on the type of winning and paid by
                                the player who discarded the tile. If the player draws the tile that the player is
                                waiting for in the draw stage, it is called a self-drawn win, the points of winning are
                                calculated based on the type of winning and an additional base points, and paid by all
                                the players who have not won yet (Note: Winning has priority, the tile that has been won
                                cannot be Ponged or Konged). The next game will be dealer by the player who wins first.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">胡牌条件：当玩家手中的牌满足[4 * a +
                                b]的条件（其中a为三张一组的刻子或顺子，b为一组对子）时，即可胡牌，例如：
                            </div>
                            <div className="mahjong-list-item-en">Winning condition: When a player's hand meets the
                                condition of [4 * a + b] (where a is a triplet or a sequence of three tiles, and b is a
                                pair), the player can win, for example:
                            </div>
                            <Example1/>
                            <Example2/>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">一炮多响：当一名玩家打出的牌被多名玩家胡牌时，称为一炮多响。一炮多响时，所有胡牌玩家的番数相加并由点炮玩家支付（注：
                                若此一炮多响为该局游戏的首次胡牌，则下局游戏由点炮玩家坐庄）。
                            </div>
                            <div className="mahjong-list-item-en">Multiple winners: When a tile discarded by a player is
                                won by multiple players, it is called multiple winners. The points of all winners are
                                added together and paid by the player who discarded the tile (Note: If this is the first
                                win in the game, the next game will be dealer by the player who discarded the tile).
                            </div>
                        </li>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">血战到底：即一局中只要还有未胡牌的玩家，游戏就不会结束。
                            </div>
                            <div className="mahjong-list-item-en">Blood-battle Mode: current round will not be ended
                                when still has players does not win (excepting drawn).
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">相公陪打：正常情况下，玩家在摸牌阶段结束后共有14章牌，若有玩家在摸牌阶段结束后手中的牌不为14章，则称为相公（不足14章
                                为“小相公”；超过14章为“大相公”）。相公玩家不得更改当前的牌数，需继续游戏直至所有其他玩家胡牌或流局；相公玩家无法听牌
                                、胡牌，但仍可碰牌、杠牌。
                            </div>
                            <div className="mahjong-list-item-en">Dead Hand: Normally, each player has 14 tiles after
                                the draw stage, if a player has less/more than 14 tiles, it is called a Dead Hand (less
                                than 14 tiles is called "Small Dead Hand"; more than 14 tiles is called "Big Dead
                                Hand"). Dead Hand player cannot change the number of tiles, must continue the game until
                                all other players win or drawn; Dead Hand player cannot Ready hand or win, but still can
                                Pong or Kong.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">流局查叫、查花猪：当所有牌均被摸完且最后一名玩家打出的牌无人能胡，则进入流局阶段。此阶段中，若有超过一名玩家未能胡牌，
                                则需立即明牌并检查玩家的听牌与缺一门状况：未能听牌的玩家需赔给已听牌玩家胡牌的最大可能番数，仍然持有弃用花色的玩家需额
                                外赔给所有其他玩家四番。
                            </div>
                            <div className="mahjong-list-item-en">Drawn Checking: When all tiles are drawn and the last
                                player discards a tile that no one can win, the game enters the drawn stage. In this
                                stage, if more than one player did not win, the tiles must be shown and check the Ready
                                hand and void suit: the player who cannot Ready hand must pay the maximum possible
                                points to the player who can Ready hand, the player who still has the void suit must pay
                                four points to all other players.
                            </div>
                        </li>
                        <br></br>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">诈胡：玩家在胡牌后，若其胡牌的牌型不符合规则，则称为诈胡。诈胡玩家需立即支付给其他玩家四番，若有其他玩家所胡牌型的
                                最大可能番数高于四番，则需支付所胡牌型的最大可能番数。
                            </div>
                            <div className="mahjong-list-item-en">False Win: When a player wins, if the type of winning
                                does not meet the rules, it is called a False Win. The player who False Win must pay
                                four points to all other players, if the maximum possible points of the type of winning
                                that other players can win are higher than four points, the player must pay the maximum
                                possible points.
                            </div>
                        </li>
                    </ul>
                    <img src={dicesImage} alt="四川麻将" className="mahjong-image"/>
                </div>
            </section>

            <section className="mahjong-section">
                <div className="mahjong-subtitle">
                    <div className="mahjong-subtitle-cn">二、胡牌规则</div>
                    <div className="mahjong-subtitle-en">2. Rules of Winning</div>
                </div>

                <div className="mahjong-content">
                    <p>
                        <span className="chinese-text">四川麻将的胡牌方式多样。以下是详细的胡牌类型：</span>
                        <span className="english-text">There are many kinds of winning types in Sichuan Mahjong, here are the details:</span>
                    </p>
                    <ul className="mahjong-list">
                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">平胡：最基本的胡牌类型，牌中包含至少一组顺子即为平胡。
                            </div>
                            <div className="mahjong-list-item-en">Common Hand: The most basic winning type, the hand
                                contains at least one sequence.
                            </div>
                            <CommonHand/>
                            <CommonHand2/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">碰碰胡（大对子）：较为常见的胡牌类型，牌中没有顺子即为碰碰胡。
                            </div>
                            <div className="mahjong-list-item-en">All Triplets: A common winning type, the hand does not
                                contain any sequence.
                            </div>
                            <AllTriplets/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清一色：胡牌时所有牌都是同一花色。</div>
                            <div className="mahjong-list-item-en">Pure One Suit: All tiles in the hand are of the same
                                suit.
                            </div>
                            <PureOneSuit/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">七对子：胡牌时牌中有七对牌。</div>
                            <div className="mahjong-list-item-en">Seven Pairs: The hand contains seven pairs.,</div>
                            <SevenPairs/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">金钩钓：所有的牌均已碰出或杠出，仅剩一张单钓胡牌。</div>
                            <div className="mahjong-list-item-en">Melded Hand: All tiles in the hand are Ponged or
                                Konged, and the hand contains only one pair.
                            </div>
                            <MeldedHand/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清对：清一色 + 碰碰胡组成的胡牌</div>
                            <div className="mahjong-list-item-en">Pure Triplets: Pure One Suit + All Triplets.</div>
                            <PureTriplets/>
                        </li>
                        <br></br>

                        {/*<li>将对：碰碰胡的胡牌形态，且全部都由“2、5、8”数字组成。</li>*/}

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">龙七对：七对子的胡牌形态，其中有四张相同的牌（不得杠出），不另计根数。
                            </div>
                            <div className="mahjong-list-item-en">Concealed Seven Pairs: The hand contains seven pairs,
                                and there are four identical tiles (cannot be Konged), the point of the root cannot be
                                additionally counted.
                            </div>
                            <ConcealedSevenPairs/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清七对：清一色 + 七对子组成的胡牌。</div>
                            <div className="mahjong-list-item-en">Pure Seven Pairs: Pure One Suit + Seven Pairs.</div>
                            <PureSevenPairs/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清金钩钓：清一色 + 碰碰胡组成的胡牌。</div>
                            <div className="mahjong-list-item-en">Pure Melded Hand: Pure One Suit + Melded Hand.</div>
                            <PureMeldedHand/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">双龙七对：七对子的胡牌形态，其中有两组四张相同的牌，不另计根数。
                            </div>
                            <div className="mahjong-list-item-en">Double Concealed Seven Pairs: The hand contains seven
                                pairs, and there are two groups of four identical tiles, the point of roots cannot be
                                additionally counted.
                            </div>
                            <DoubleConcealedSevenPairs/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清龙七对：七对子 +
                                清一色的胡牌形态，其中有两组四张相同的牌，不另计根数与清一色。
                            </div>
                            <div className="mahjong-list-item-en">Pure Concealed Seven Pairs: Seven Pairs + Pure One
                                Suit, the hand contains two groups of four identical tiles, the point of roots and Pure
                                One Suit cannot be additionally counted.
                            </div>
                            <PureConcealedSevenPairs/>
                        </li>
                        <br></br>
                    </ul>

                    <p>
                        <span className="chinese-text">以下为极品牌型，一般情况下一律按封顶番数计算：</span>
                        <span className="english-text">The following are special wining types, usually calculated as the maximum points:</span>
                    </p>
                    <ul>
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">绿一色：仅使用二、三、四、六、八条组成的胡牌形态，不另计清一色。
                            </div>
                            <div className="mahjong-list-item-en">Pure Green Hand: The hand contains only 2, 3, 4, 6, 8
                                of Bamboo, the point of Pure One Suit cannot be additionally counted.
                            </div>
                            <PureGreenHand/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">十八罗汉：胡牌时有四个杠，不另计金钩钓。</div>
                            <div className="mahjong-list-item-en">Four Kongs: The hand contains four Kongs, the point of
                                Melded Hand cannot be additionally counted.
                            </div>
                            <FourKongs/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">连七对：由数字连续的七对子组成的胡牌，不另计清一色与七对子。
                            </div>
                            <div className="mahjong-list-item-en">Seven Shifted Pairs: The hand contains seven pairs of
                                consecutive numbers, the point of Pure One Suit and Seven Pairs cannot be additionally
                                counted.
                            </div>
                            <SevenShiftedPairs/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn"> 九莲宝灯：由“1112345678999”另加任意一张相同花色的牌组成的胡牌形态，不另计清一色。
                            </div>
                            <div className="mahjong-list-item-en">Nine Gates: The hand contains "1112345678999" and one
                                additional tile of the same suit, the point of Pure One Suit cannot be additionally
                                counted.
                            </div>
                            <NineGates/>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">三龙七对：七对子的胡牌形态，其中有三组四张相同的牌，不另计根数。
                            </div>
                            <div className="mahjong-list-item-en">Three Concealed Triplets: The hand contains seven
                                pairs, and there are three groups of four identical tiles, the point of roots cannot be
                                additionally counted.
                            </div>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清双龙七对：双龙七对 +
                                清一色的胡牌形态，其中有两组四张相同的牌，不另计根数。
                            </div>
                            <div className="mahjong-list-item-en">Pure Double Concealed Seven Pairs: Double Concealed
                                Seven Pairs + Pure One Suit, the hand contains two groups of four identical tiles, the
                                point of roots cannot be additionally counted.
                            </div>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">天胡：庄家唯一的特权，即使用最初摸到的14章牌构成的胡牌，不另计自摸加底。
                            </div>
                            <div className="mahjong-list-item-en">Heavenly Hand: The dealer's unique privilege, the hand
                                contains 14 tiles that the dealer draws initially, the point of self-drawn win cannot be
                                additionally counted.
                            </div>
                        </li>
                        <br></br>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">地胡：子家唯一的特权，即使用最初摸到的13章牌构成的胡牌，庄家点炮或自摸皆可，不另计自摸加底。
                            </div>
                            <div className="mahjong-list-item-en">Earthly Hand: The non-dealer's unique privilege, the
                                hand contains 13 tiles that the non-dealer draws initially, the point of self-drawn win
                                cannot be additionally counted.
                            </div>
                        </li>
                        <br></br>
                    </ul>
                </div>
            </section>

            <section className="mahjong-section">
                <div className="mahjong-subtitle">
                    <div className="mahjong-subtitle-cn">三、计分规则</div>
                    <div className="mahjong-subtitle-en">3. Points Calculating</div>
                </div>

                <div className="mahjong-content">
                    <div className="point-formula">
                        <div className="point-formula-cn">
                            四川麻将的计分通常采用番数制，若胡牌后的牌型番数为x，对应的赌注的计算公式为：2<sup>x-1</sup>
                        </div>
                        <div className="point-formula-en">
                            Sichuan Mahjong usually uses the points system, if the points of the winning type are x, the
                            formula for calculating the corresponding bet is: 2<sup>x-1</sup>
                        </div>
                    </div>

                    <div className="mahjong-subheading">
                        <div className="mahjong-subheading-cn">常见的计番方式如下：</div>
                        <div className="mahjong-subheading-en">Common points calculating methods are as follows:</div>
                    </div>

                    <ul className="mahjong-list points-list">
                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">平胡：1番。</div>
                            <div className="mahjong-list-item-en">Common Hand: 1 point.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">碰碰胡：2番。</div>
                            <div className="mahjong-list-item-en">All Triplets: 2 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清一色：3番。</div>
                            <div className="mahjong-list-item-en">Pure One Suit: 3 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">七对子：3番。</div>
                            <div className="mahjong-list-item-en">Seven Pairs: 3 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">金钩钓：3番。</div>
                            <div className="mahjong-list-item-en">Melded Hand: 3 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清对：4番。</div>
                            <div className="mahjong-list-item-en">Pure Triplets: 4 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">龙七对：5番。</div>
                            <div className="mahjong-list-item-en">Concealed Seven Pairs: 5 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清七对：5番。</div>
                            <div className="mahjong-list-item-en">Pure Seven Pairs: 5 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清金钩钓：5番。</div>
                            <div className="mahjong-list-item-en">Pure Melded Hand: 5 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">双龙七对：7番。</div>
                            <div className="mahjong-list-item-en">Double Concealed Seven Pairs: 7 points.</div>
                        </li>

                        <li className="mahjong-list-item">
                            <div className="mahjong-list-item-cn">清龙七对：7番。</div>
                            <div className="mahjong-list-item-en">Pure Concealed Seven Pairs: 7 points.</div>
                        </li>
                    </ul>

                    <div className="mahjong-subheading">
                        <div
                            className="mahjong-list-item-cn">刮风下雨：四川麻将的特色玩法，即当有玩家杠牌时，其他玩家须按照杠牌的形式计算番数并立刻结算
                        </div>
                        <div className="mahjong-list-item-en">Special points calculating method in Sichuan Mahjong, when
                            a player Konged, other players must calculate the points according to the type of Kong and
                            settle immediately.
                        </div>
                    </div>

                    <ul className="mahjong-list">
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">刮风（明杠）：当玩家持有一组刻子，其他任一玩家打出第四章牌时，则可立即杠牌，点杠玩家须立即结算2番给杠牌玩家。
                            </div>
                            <div className="mahjong-list-item-en">Exposed Kong: When a player has a triplet, and another
                                player discards the fourth tile of the same kind, the player can Kong, the player who
                                Konged must settle 2 points to the player who Konged.
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">刮风（弯杠）：当玩家碰牌后，在自己的摸牌阶段又摸到第四章牌时，则可立即杠牌，场上所有未胡牌玩家须立即结算1番给杠牌玩家（注：若弯杠的牌并非当前摸牌阶段所得，则不进行刮风下雨结算）
                            </div>
                            <div className="mahjong-list-item-en">Supplemented Kong: When a player Ponged, and draws the
                                fourth tile of the same kind in the draw stage, the player can Kong, all the players who
                                have not won yet must settle 1 point to the player who Konged (Note: If the tile of Kong
                                is not drawn in the current draw stage, the points of this Supplemented Kong cannot be
                                additionally counted).
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">下雨（暗杠）：当玩家持有一组刻子，在自己的摸牌阶段又摸到第四章牌时，则可立即杠牌，场上所有未胡牌玩家须立即结算2番给杠牌玩家（注：与其他地区玩法不同，四川麻将暗杠须明牌展示）。
                            </div>
                            <div className="mahjong-list-item-en">Concealed Kong: When a player has a triplet, and draws
                                the fourth tile of the same kind in the draw stage, the player can Kong, all the players
                                who have not won yet must settle 2 points to the player who Konged (Note: Different from
                                other regions, the Concealed Kong must be shown on the table).
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">退税：流局查叫阶段中，未听牌玩家须退回本局刮风（明杠、弯杠）所得（下雨不用退税）
                            </div>
                            <div className="mahjong-list-item-en">Refund: During the drawn checking stage, the player
                                who did not Ready hand must refund the points of Exposed Kong and Supplemented Kong
                                (Concealed Kong does not need to refund).
                            </div>
                        </li>
                    </ul>

                    <div className="mahjong-subheading">
                        <div className="mahjong-subheading-cn">附加计番：</div>
                        <div className="mahjong-subheading-en">Additional points calculating:</div>
                    </div>

                    <ul className="mahjong-list">
                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">根：当玩家胡牌时，牌中四章一样的牌（无论是否杠出）称之为根，结算时每有一根则另加1番。
                            </div>
                            <div className="mahjong-list-item-en">Roots: When a player wins, the hand contains four
                                identical tiles (no matter Konged or concealed) is called Roots, each Root is
                                additionally counted as 1 point.
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">抢杠胡：其他玩家杠牌时（必须为弯杠），加杠的牌恰巧能够构成胡牌，则此杠作废并视为杠牌方点炮，结算时另加1番。
                            </div>
                            <div className="mahjong-list-item-en">Robbing a Kong: When a player Konged (Supplemented
                                Kong), and the tile of Kong can be used to win, the Kong is invalid and the player who
                                Konged must settle 1 point to the player who wins.
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">杠上点炮：当玩家杠牌后的补牌阶段结束后，打出的牌被其他玩家胡牌，则视为杠牌方点炮，此杠的刮风下雨所得须立即转移给胡牌玩家（若为一炮多响则须给每位胡牌玩家转移同等的刮风下雨所得），并在结算时另加1番。
                            </div>
                            <div className="mahjong-list-item-en">Konged Discard: When a player Konged, and the tile
                                discarded after the draw stage is won by another player, the player who Konged must
                                settle the points of the Kong to the player who wins immediately (if multiple winners,
                                the points must be settled to each winner), and settle 1 point when calculating.
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">杠上开花：当玩家杠牌后的补牌阶段恰好摸到了所听的牌，则视为杠牌方自摸胡牌，须在结算时另加2番，并取消自摸加底计算。
                            </div>
                            <div className="mahjong-list-item-en">Konged Draw: When a player Konged, and draws the tile
                                that the player is waiting for in the draw stage, the player who Konged must settle 2
                                points when calculating, and cancel the points of self-drawn win.
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">海底炮：玩家利用进入流局阶段之前其他玩家打出的最后一张牌胡牌，结算时另加1番。
                            </div>
                            <div className="mahjong-list-item-en">Last Discard: When a player wins with the last tile
                                discarded by another player before entering the drawn stage, the player must settle 1
                                point when calculating.
                            </div>
                        </li>

                        <li className="mahjong-list-item">
                            <div
                                className="mahjong-list-item-cn">海底捞月：玩家利用流局阶段之前摸到的最后一张牌自摸胡牌，结算时另加1番。
                            </div>
                            <div className="mahjong-list-item-en">Last Draw: When a player wins with the last tile drawn
                                by the player before entering the drawn stage, the player must settle 1 point when
                                calculating.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default SichuanMahjongRules;
