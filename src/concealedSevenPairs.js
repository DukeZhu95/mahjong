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
        MJw4, MJw4, // 对子
        MJw4, MJw4, // 对子
        MJs2, MJs2,  // 对子
        MJs5, MJs5, // 对子
        MJs8, MJs8, // 对子
    ];

    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '10px'
        },
        tile: {
            width: '40px', // 根据你图片的大小进行调整
            height: 'auto',
            margin: '2px'
        }
    };

    return (
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
    );
}

export default ConcealedSevenPairs;
