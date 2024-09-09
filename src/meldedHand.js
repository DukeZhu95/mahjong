import React from 'react';
import MJt1 from './Images/MJt1.png';
import MJt4 from './Images/MJt4.png';
import MJs2 from './Images/MJs2.png';
import MJs6 from './Images/MJs6.png';
import MJs9 from './Images/MJs9.png';

function MeldedHand() {
    const tiles = [
        MJt1, MJt1, MJt1,  // 碰牌
        MJt4, MJt4, MJt4,  // 杠牌
        MJs2, MJs2, MJs2,  // 碰牌
        MJs6, MJs6, MJs6,  // 碰牌
        MJs9, MJs9  // 对子
    ];

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
            flexWrap: 'wrap'
        },
        tile: {
            width: '40px', // 根据你图片的大小进行调整
            height: 'auto',
            margin: '2px'
        },
        spaceBetween: {
            marginLeft: '5px',  // 添加间距
            marginRight: '5px',  // 添加间距
        },
        text: {
            fontSize: '14px',
            color: 'red',
            marginLeft: '10px',
        }
    };

    return (
        <div style={styles.container}>
            {/* 前面部分的碰牌和杠牌 */}
            {tiles.slice(0, 12).map((tile, index) => (
                <img
                    key={index}
                    src={tile}
                    alt={`麻将${index}`}
                    style={styles.tile}
                />
            ))}

            {/* 添加间隙和说明文字 在碰牌与对子之间 */}
            <div style={styles.spaceBetween}></div>
            <span style={styles.text}>👈均已碰或杠出</span>
            <div style={styles.spaceBetween}></div>

            {/* 对子部分 */}
            {tiles.slice(12).map((tile, index) => (
                <img
                    key={index + 12}
                    src={tile}
                    alt={`对子${index}`}
                    style={styles.tile}
                />
            ))}
        </div>
    );
}

export default MeldedHand;
