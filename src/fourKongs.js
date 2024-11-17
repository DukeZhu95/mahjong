import React from 'react';
import MJt1 from './Images/MJt1.png';
import MJt8 from './Images/MJt8.png';
import MJt9 from './Images/MJt9.png';
import MJw5 from './Images/MJw5.png';
import MJw6 from './Images/MJw6.png';

function FourKongs() {
    const tiles = [
        MJt1, MJt1, MJt1, MJt1,
        MJt9, MJt9, MJt9, MJt9,
        MJw5, MJw5, MJw5, MJw5,
        MJw6, MJw6, MJw6, MJw6,
    ];

    const pairTiles = [MJt8, MJt8];

    const styles = {
        outerContainer: {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
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
                <span style={styles.text}>👈均已杠出<br/>All have been Konged</span>
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

export default FourKongs;