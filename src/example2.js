import React from 'react';
import MJw4 from './Images/MJw4.png';
import MJw9 from './Images/MJw9.png';
import MJt2 from './Images/MJt2.png';
import MJt5 from './Images/MJt5.png';
import MJt9 from './Images/MJt9.png';

function Example2() {
    const tiles = [
        MJw4, MJw4, MJw4,  // 刻子
        MJw9, MJw9, MJw9,  // 刻子
        MJt2, MJt2, MJt2,  // 刻子
        MJt5, MJt5, MJt5,  // 刻子
        MJt9, MJt9  // 对子
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

export default Example2;
