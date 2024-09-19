import React from 'react';
import MJw2 from './Images/MJw2.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJw6 from './Images/MJw6.png';
import MJs7 from './Images/MJt1.png';
import MJs8 from './Images/MJt2.png';
import MJs9 from './Images/MJt3.png';
import MJt4 from './Images/MJt4.png';
import MJt5 from './Images/MJt5.png';
import MJt6 from './Images/MJt6.png';
import MJt2 from './Images/MJt8.png';

function CommonHand() {
    const tiles = [
        MJw2, MJw3, MJw4,
        MJw6, MJw6, MJw6,
        MJs7, MJs8, MJs9,
        MJt4, MJt5, MJt6,
        MJt2, MJt2
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

export default CommonHand;