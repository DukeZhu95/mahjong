import React from 'react';
import MJt1 from './Images/MJt1.png';
import MJt4 from './Images/MJt4.png';
import MJs2 from './Images/MJs2.png';
import MJs6 from './Images/MJs6.png';
import MJs9 from './Images/MJs9.png';

function MeldedHand() {
    const tiles = [
        MJt1, MJt1, MJt1,  // 碰牌
        MJt4, MJt4, MJt4, MJt4, // 杠牌
        MJs2, MJs2, MJs2,  // 碰牌
        MJs6, MJs6, MJs6,  // 碰牌
    ];

    const pairTiles = [MJs9, MJs9];  // 对子

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
                <span style={styles.text}>👈（均已碰或杠出）<br/>(All have been Ponged or Konged)</span>
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

export default MeldedHand;