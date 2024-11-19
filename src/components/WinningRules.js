import React from 'react';
import CommonHand from "../commonHand";
import CommonHand2 from "../commonHand2";
import AllTriplets from "../allTriplets";
import PureOneSuit from "../pureOneSuit";
import SevenPairs from "../sevenPairs";
import MeldedHand from "../meldedHand";
import PureTriplets from "../pureTriplets";
import ConcealedSevenPairs from "../concealedSevenPairs";
import PureSevenPairs from "../pureSevenPairs";
import PureMeldedHand from "../pureMeldedHand";
import DoubleConcealedSevenPairs from "../doubleConcealedSevenPairs";
import PureConcealedSevenPairs from "../pureConcealedSevenPairs";
import PureGreenHand from "../pureGreenHand";
import FourKongs from "../fourKongs";
import SevenShiftedPairs from "../sevenShiftedPairs";
import NineGates from "../nineGates";
import table3Image from "../Images/table3.png";

function WinningRules() {
    return (
        <div className="mahjong-rules">
            <div className="mahjong-subtitle">
                <div className="mahjong-subtitle-cn">胡牌类型</div>
                <div className="mahjong-subtitle-en">Categories of Winning</div>
            </div>

            <img src={table3Image} alt="四川麻将" className="mahjong-image"/>

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
        </div>
    );
}

export default WinningRules;