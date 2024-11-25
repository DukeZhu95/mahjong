import React from 'react';
import MJs1 from './Images/MJs1.png';
import MJs3 from './Images/MJs3.png';
import MJs5 from './Images/MJs5.png';
import MJs6 from './Images/MJs6.png';
import MJs7 from './Images/MJs7.png';

function PureTriplets() {
    const tiles = [
        MJs1, MJs1, MJs1,  // 刻子
        MJs3, MJs3, MJs3,  // 刻子
        MJs5, MJs5, MJs5,  // 刻子
        MJs6, MJs6, MJs6,  // 刻子
        MJs7, MJs7  // 对子
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

export default PureTriplets;
