import React from 'react';
import MJs2 from './Images/MJs2.png';
import MJs3 from './Images/MJs3.png';
import MJs4 from './Images/MJs4.png';
import MJs5 from './Images/MJs5.png';
import MJs7 from './Images/MJs7.png';
import MJs9 from './Images/MJs9.png';

function PureConcealedSevenPairs() {
    const tiles = [
        MJs2, MJs2, // 对子
        MJs3, MJs3, // 对子
        MJs4, MJs4, // 对子
        MJs5, MJs5, // 对子
        MJs5, MJs5,  // 对子
        MJs7, MJs7, // 对子
        MJs9, MJs9, // 对子
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

export default PureConcealedSevenPairs;
