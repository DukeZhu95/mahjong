import React from 'react';
import MJt2 from './Images/MJt2.png';
import MJt3 from './Images/MJt3.png';
import MJt4 from './Images/MJt4.png';
import MJt5 from './Images/MJt5.png';
import MJt6 from './Images/MJt6.png';
import MJt7 from './Images/MJt7.png';
import MJt8 from './Images/MJt8.png';

function SevenShiftedPairs() {
    const tiles = [
        MJt2, MJt2, // 对子
        MJt3, MJt3, // 对子
        MJt4, MJt4, // 对子
        MJt5, MJt5, // 对子
        MJt6, MJt6,  // 对子
        MJt7, MJt7, // 对子
        MJt8, MJt8, // 对子
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

export default SevenShiftedPairs;
