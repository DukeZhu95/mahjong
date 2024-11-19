import React from 'react';
import chipsImage from "../Images/chips.png";

function ScoringRules() {
    return (
        <div className="mahjong-rules">
            <div className="mahjong-subtitle">
                <div className="mahjong-subtitle-cn">计分规则</div>
                <div className="mahjong-subtitle-en">Points Calculating</div>
            </div>

            <img src={chipsImage} alt="四川麻将" className="mahjong-image"/>

            <div className="mahjong-content">
                <div className="point-formula">
                    <div className="mahjong-list-item-cn">
                        四川麻将的计分通常采用番数制，若胡牌后的牌型番数为x，对应的赌注的计算公式为：2<sup>x-1</sup>
                    </div>
                    <div className="mahjong-list-item-en">
                        Sichuan Mahjong usually uses the points system, if the points of the winning type are x, the
                        formula for calculating the corresponding bet is: 2<sup>x-1</sup>
                    </div>
                </div>

                <div className="mahjong-subheading">
                    <div className="mahjong-list-item-cn">常见的计番方式如下：</div>
                    <div className="mahjong-list-item-en">Common points calculating methods are as follows:</div>
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
                        className="mahjong-list-item-cn">*刮风下雨：四川麻将的特色玩法，即当有玩家杠牌时，其他玩家须按照杠牌的形式计算番数并立刻结算
                    </div>
                    <div className="mahjong-list-item-en">*Special points calculating method in Sichuan Mahjong, when
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
        </div>
    );
}

export default ScoringRules;