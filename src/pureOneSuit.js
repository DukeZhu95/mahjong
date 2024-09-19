import React from 'react';
import MJs1 from './Images/MJs1.png';
import MJs2 from './Images/MJs2.png';
import MJs3 from './Images/MJs3.png';
import MJs4 from './Images/MJs4.png';
import MJs5 from './Images/MJs5.png';
import MJs6 from './Images/MJs6.png';
import MJs7 from './Images/MJs7.png';
import MJs8 from './Images/MJs8.png';
import MJs9 from './Images/MJs9.png';

function PureOneSuit() {
    const tiles = [
        MJs1, MJs2, MJs3,  // 顺子
        MJs4, MJs4, MJs4,  // 刻子
        MJs5, MJs6, MJs7,  // 顺子
        MJs7, MJs8, MJs9,  // 顺子
        MJs8, MJs8  // 对子
    ];

    const styles = {
        outerContainer: {
            width: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        },
        container: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            marginTop: '10px',
            paddingBottom: '10px', // 为移动端滚动条预留空间
        },
        tile: {
            width: '40px',
            height: 'auto',
            margin: '2px',
            flexShrink: 0, // 防止图片被压缩
        }
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                {tiles.map((tile, index) => (
                    <img
                        key={index}
                        src={tile}
                        alt={`麻将${index}`}
                        style={styles.tile}
                    />
                ))}
            </div>
        </div>
    );
}

export default PureOneSuit;
