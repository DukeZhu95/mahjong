import React from 'react';
import MJw2 from './Images/MJw2.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJs2 from './Images/MJs2.png';
import MJs5 from './Images/MJs5.png';
import MJs8 from './Images/MJs8.png';

function ConcealedSevenPairs() {
    const tiles = [
        MJw2, MJw2, // 对子
        MJw3, MJw3, // 对子
        MJw4, MJw4, MJw4, MJw4, // 四张相同的牌
        MJs2, MJs2,  // 对子
        MJs5, MJs5, // 对子
        MJs8, MJs8, // 对子
    ];

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
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '10px',
            paddingBottom: '10px',
        },
        tile: {
            width: '40px',
            height: 'auto',
            margin: '2px',
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
                    <React.Fragment key={index}>
                        <img
                            src={tile}
                            alt={`麻将${index}`}
                            style={styles.tile}
                        />
                        {index === 7 && <span style={styles.text}>（👈不可杠出）</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default ConcealedSevenPairs;