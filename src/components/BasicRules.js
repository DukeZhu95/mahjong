import React from 'react';
import Example1 from "../example1";
import Example2 from "../example2";
import catchImage from "../Images/catch.png";

function BasicRules() {
    return (
        <div className="mahjong-rules">
            <div className="mahjong-subtitle">
                <div className="mahjong-subtitle-cn">基本规则</div>
                <div className="mahjong-subtitle-en">Basic Rules</div>
            </div>

            <img src={catchImage} alt="四川麻将" className="mahjong-image"/>

            <div className="mahjong-content">
                <p>
                    <span
                        className="mahjong-text-cn">四川麻将是一种流行于中国四川省的麻将玩法。以下是基本的游戏规则：</span>
                    <span className="english-text">Sichuan Mahjong is a popular game in Sichuan province, China. Here
                    are the basic rules:</span>
                </p>
                <ul className="mahjong-list">
                    {/*<li className="mahjong-list-item">*/}
                    {/*    <div className="mahjong-list-item-cn">使用108张牌，不包括风牌、箭牌和花牌。</div>*/}
                    {/*    <div className="mahjong-list-item-en">Using 108 tiles, not includes Winds, Dragons and*/}
                    {/*        Flowers.*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<br></br>*/}
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
                        <div className="mahjong-list-item-cn">缺一门：每个玩家需要选择放弃一门花色，不能胡这一门的牌。
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
                        <div className="mahjong-list-item-cn">碰牌：当玩家手中持有一组对子，其他任一玩家打出第三章相同的牌时，则可选择立即碰牌，碰出的牌须明牌展示在桌面上且
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
                        <div className="mahjong-list-item-cn">胡牌：玩家进入听牌阶段后，若有其他玩家打出了所听的牌，则听牌玩家可立即胡牌，胡牌后的番数根据胡牌的类型计算并由点炮
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
                        <div className="mahjong-list-item-cn">一炮多响：当一名玩家打出的牌被多名玩家胡牌时，称为一炮多响。一炮多响时，所有胡牌玩家的番数相加并由点炮玩家支付（注：
                            若此一炮多响为该局游戏的首次胡牌，则下局游戏由点炮玩家坐庄）。
                        </div>
                        <div className="mahjong-list-item-en">Multiple winners: When a tile discarded by a player is
                            won by multiple players, it is called multiple winners. The points of all winners are
                            added together and paid by the player who discarded the tile (Note: If this is the first
                            win in the game, the next game will be dealer by the player who discarded the tile).
                        </div>
                    </li>
                    <li className="mahjong-list-item">
                        <div className="mahjong-list-item-cn">血战到底：即一局中只要还有未胡牌的玩家，游戏就不会结束。
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
                        <div className="mahjong-list-item-cn">诈胡：玩家在胡牌后，若其胡牌的牌型不符合规则，则称为诈胡。诈胡玩家需立即支付给其他玩家四番，若有其他玩家所胡牌型的
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

            </div>
        </div>
    );
}

export default BasicRules;