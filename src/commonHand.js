import React from 'react';
import MJw2 from './Images/MJw2.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJw6 from './Images/MJw6.png';
import MJs7 from './Images/MJt1.png';
import MJs8 from './Images/MJt2.png';
import MJs9 from './Images/MJt3.png';
import MJt4 from './Images/MJt4.png';
import MJt5 from './Images/MJt5.png';
import MJt6 from './Images/MJt6.png';
import MJt2 from './Images/MJt8.png';

function CommonHand() {
    const tiles = [
        MJw2, MJw3, MJw4,  // 顺子
        MJw6, MJw6, MJw6,  // 刻子
        MJs7, MJs8, MJs9,  // 顺子
        MJt4, MJt5, MJt6,  // 顺子
        MJt2, MJt2  // 对子
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

export default CommonHand;
