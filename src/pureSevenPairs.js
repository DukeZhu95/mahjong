import React from 'react';
import MJt1 from './Images/MJt1.png';
import MJt2 from './Images/MJt2.png';
import MJt3 from './Images/MJt3.png';
import MJt5 from './Images/MJt5.png';
import MJt6 from './Images/MJt6.png';
import MJt7 from './Images/MJt7.png';
import MJt8 from './Images/MJt8.png';

function PureSevenPairs() {
    const tiles = [
        MJt1, MJt1, // 对子
        MJt2, MJt2, // 对子
        MJt3, MJt3, // 对子
        MJt5, MJt5,  // 对子
        MJt6, MJt6, // 对子
        MJt7, MJt7, // 对子
        MJt8, MJt8, // 对子
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

export default PureSevenPairs;
