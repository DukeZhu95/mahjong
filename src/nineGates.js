import React from 'react';
import MJw1 from './Images/MJw1.png';
import MJw2 from './Images/MJw2.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJw5 from './Images/MJw5.png';
import MJw6 from './Images/MJw6.png';
import MJw7 from './Images/MJw7.png';
import MJw8 from './Images/MJw8.png';
import MJw9 from './Images/MJw9.png';

function NineGates() {
    const tiles = [
        MJw1, MJw1, MJw1,
        MJw2, MJw3, MJw4,
        MJw5, MJw6, MJw7,
        MJw8, MJw9, MJw9,
        MJw9, MJw5
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

export default NineGates;
