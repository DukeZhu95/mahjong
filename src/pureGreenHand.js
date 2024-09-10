import React from 'react';
import MJs2 from './Images/MJs2.png';
import MJs3 from './Images/MJs3.png';
import MJs4 from './Images/MJs4.png';
import MJs6 from './Images/MJs6.png';
import MJs8 from './Images/MJs8.png';

function PureGreenHand() {
    const tiles = [
        MJs2, MJs3, MJs4,
        MJs2, MJs3, MJs4,
        MJs2, MJs3, MJs4,
        MJs6, MJs6, MJs6,
        MJs8, MJs8
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

export default PureGreenHand;
