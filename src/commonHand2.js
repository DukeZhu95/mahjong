import React from 'react';
import MJs3 from './Images/MJs3.png';
import MJs4 from './Images/MJs4.png';
import MJs5 from './Images/MJs5.png';
import MJs7 from './Images/MJs7.png';
import MJs8 from './Images/MJs8.png';
import MJs9 from './Images/MJs9.png';
import MJw1 from './Images/MJw1.png';
import MJw2 from './Images/MJw2.png';
import MJw3 from './Images/MJw3.png';
import MJw6 from './Images/MJw6.png';
import MJw7 from './Images/MJw7.png';
import MJw8 from './Images/MJw8.png';
import MJw9 from './Images/MJw9.png';

function CommonHand2() {
    const tiles = [
        MJs3, MJs4, MJs5,  // 顺子
        MJs7, MJs8, MJs9,  // 顺子
        MJw1, MJw2, MJw3,  // 顺子
        MJw6, MJw7, MJw8,  // 顺子
        MJw9, MJw9  // 对子
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

export default CommonHand2;
