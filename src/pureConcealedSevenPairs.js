import React from 'react';
import MJs2 from './Images/MJs2.png';
import MJs3 from './Images/MJs3.png';
import MJs4 from './Images/MJs4.png';
import MJs5 from './Images/MJs5.png';
import MJs7 from './Images/MJs7.png';
import MJs9 from './Images/MJs9.png';

function PureConcealedSevenPairs() {
    const tiles = [
        MJs2, MJs2, // 对子
        MJs3, MJs3, // 对子
        MJs4, MJs4, // 对子
        MJs5, MJs5, // 对子
        MJs5, MJs5,  // 对子
        MJs7, MJs7, // 对子
        MJs9, MJs9, // 对子
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

export default PureConcealedSevenPairs;
