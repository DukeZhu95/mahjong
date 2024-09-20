import React from 'react';
import MJt5 from './Images/MJt5.png';
import MJt9 from './Images/MJt9.png';
import MJs1 from './Images/MJs1.png';
import MJs2 from './Images/MJs2.png';
import MJs7 from './Images/MJs7.png';

function DoubleConcealedSevenPairs() {
    const tiles = [
        MJt5, MJt5, // 对子
        MJt5, MJt5, // 对子
        MJt9, MJt9, // 对子
        MJs1, MJs1, // 对子
        MJs2, MJs2,  // 对子
        MJs7, MJs7, // 对子
        MJs7, MJs7, // 对子
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

export default DoubleConcealedSevenPairs;
