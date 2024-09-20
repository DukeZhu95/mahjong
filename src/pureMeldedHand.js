import React from 'react';
import MJw1 from './Images/MJw1.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJw6 from './Images/MJw6.png';
import MJw8 from './Images/MJw8.png';

function PureMeldedHand() {
    const tiles = [
        MJw1, MJw1, MJw1,  // 碰牌
        MJw3, MJw3, MJw3,  // 碰牌
        MJw4, MJw4, MJw4,  // 碰牌
        MJw6, MJw6, MJw6, MJw6, // 杠牌
    ];

    const pairTiles = [MJw8, MJw8];  // 对子

    const styles = {
        outerContainer: {
            width: '100%',
            maxWidth: '800px',  // 设置最大宽度
            margin: '0 auto',   // 居中显示
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            msOverflowStyle: 'auto',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '10px',
            flexWrap: 'nowrap',
            minWidth: 'min-content',
            paddingBottom: '10px',
        },
        tile: {
            width: '40px',
            height: 'auto',
            margin: '2px',
            flexShrink: 0,
        },
        spaceBetween: {
            marginLeft: '5px',
            marginRight: '5px',
            flexShrink: 0,
        },
        text: {
            fontSize: '14px',
            color: 'red',
            marginLeft: '10px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
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
                <div style={styles.spaceBetween}></div>
                <span style={styles.text}>👈均已碰或杠出</span>
                <div style={styles.spaceBetween}></div>
                {pairTiles.map((tile, index) => (
                    <img
                        key={index + tiles.length}
                        src={tile}
                        alt={`对子${index}`}
                        style={styles.tile}
                    />
                ))}
            </div>
        </div>
    );
}

export default PureMeldedHand;
