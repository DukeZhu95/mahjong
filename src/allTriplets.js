import React from 'react';
import MJw5 from './Images/MJw5.png';
import MJw7 from './Images/MJw7.png';
import MJt3 from './Images/MJt3.png';
import MJt4 from './Images/MJt4.png';
import MJw8 from './Images/MJw8.png';

function AllTriplets() {
    const tiles = [
        MJw5, MJw5, MJw5,  // 刻子
        MJw7, MJw7, MJw7,  // 刻子
        MJt3, MJt3, MJt3,  // 刻子
        MJt4, MJt4, MJt4,  // 刻子
        MJw8, MJw8  // 对子
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

export default AllTriplets;
