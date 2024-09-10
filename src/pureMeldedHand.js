import React from 'react';
import MJw1 from './Images/MJw1.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJw6 from './Images/MJw6.png';
import MJw8 from './Images/MJw8.png';

function PureMeldedHand() {
    const tiles = [
        MJw1, MJw1, MJw1,  // 碰牌
        MJw3, MJw3, MJw3,  // 杠牌
        MJw4, MJw4, MJw4,  // 碰牌
        MJw6, MJw6, MJw6,  // 碰牌
        MJw8, MJw8  // 对子
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

export default PureMeldedHand;
