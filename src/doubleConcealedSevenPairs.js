import React from 'react';
import MJt5 from './Images/MJt5.png';
import MJt9 from './Images/MJt9.png';
import MJs1 from './Images/MJs1.png';
import MJs2 from './Images/MJs2.png';
import MJs7 from './Images/MJs7.png';

function DoubleConcealedSevenPairs() {
    const tiles = [
        MJt5, MJt5, // 对子
        MJt5, MJt5, // 对子
        MJt9, MJt9, // 对子
        MJs1, MJs1, // 对子
        MJs2, MJs2,  // 对子
        MJs7, MJs7, // 对子
        MJs7, MJs7, // 对子
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

export default DoubleConcealedSevenPairs;
