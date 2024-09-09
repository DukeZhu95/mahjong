import React from 'react';
import MJs1 from './Images/MJs1.png';
import MJs3 from './Images/MJs3.png';
import MJs5 from './Images/MJs5.png';
import MJs6 from './Images/MJs6.png';
import MJs7 from './Images/MJs7.png';

function PureTriplets() {
    const tiles = [
        MJs1, MJs1, MJs1,  // 刻子
        MJs3, MJs3, MJs3,  // 刻子
        MJs5, MJs5, MJs5,  // 刻子
        MJs6, MJs6, MJs6,  // 刻子
        MJs7, MJs7  // 对子
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

export default PureTriplets;
