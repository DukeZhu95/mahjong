import React from 'react';
import MJw1 from './Images/MJw1.png';
import MJw2 from './Images/MJw2.png';
import MJw3 from './Images/MJw3.png';
import MJw4 from './Images/MJw4.png';
import MJw5 from './Images/MJw5.png';
import MJw6 from './Images/MJw6.png';
import MJw7 from './Images/MJw7.png';
import MJw8 from './Images/MJw8.png';
import MJw9 from './Images/MJw9.png';

function NineGates() {
    const tiles = [
        MJw1, MJw1, MJw1,
        MJw2, MJw3, MJw4,
        MJw5, MJw6, MJw7,
        MJw8, MJw9, MJw9,
        MJw9, MJw5
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

export default NineGates;
