import React from 'react';
import MJt1 from './Images/MJt1.png';
import MJt8 from './Images/MJt8.png';
import MJt9 from './Images/MJt9.png';
import MJw5 from './Images/MJw5.png';
import MJw6 from './Images/MJw6.png';

function FourKongs() {
    const tiles = [
        MJt1, MJt1, MJt1, MJt1,
        MJt9, MJt9, MJt9, MJt9,
        MJw5, MJw5, MJw5, MJw5,
        MJw6, MJw6, MJw6, MJw6,
        MJt8, MJt8
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
            {tiles.slice(0, 16).map((tile, index) => (
                <img
                    key={index}
                    src={tile}
                    alt={`麻将${index}`}
                    style={styles.tile}
                />
            ))}

            {/* 添加间隙和说明文字 在碰牌与对子之间 */}
            <div style={styles.spaceBetween}></div>
            <span style={styles.text}>👆均已杠出</span>
            <div style={styles.spaceBetween}></div>

            {/* 对子部分 */}
            {tiles.slice(16).map((tile, index) => (
                <img
                    key={index + 16}
                    src={tile}
                    alt={`对子${index}`}
                    style={styles.tile}
                />
            ))}
        </div>
    );
}

export default FourKongs;
