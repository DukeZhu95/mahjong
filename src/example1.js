import React from 'react';
import MJs1 from './Images/MJs1.png';
import MJs2 from './Images/MJs2.png';
import MJs3 from './Images/MJs3.png';
import MJs6 from './Images/MJs6.png';
import MJs7 from './Images/MJs7.png';
import MJs8 from './Images/MJs8.png';
import MJt1 from './Images/MJt1.png';
import MJt3 from './Images/MJt3.png';
import MJt7 from './Images/MJt7.png';
import MJt8 from './Images/MJt8.png';
import MJt9 from './Images/MJt9.png';

function Example1() {
    const tiles = [
        MJs1, MJs2, MJs3,
        MJs6, MJs7, MJs8,
        MJt3, MJt3, MJt3,
        MJt7, MJt8, MJt9,
        MJt1, MJt1
    ];

    const styles = {
        outerContainer: {
            width: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        },
        container: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            marginTop: '10px',
            paddingBottom: '10px', // 为移动端滚动条预留空间
        },
        tile: {
            width: '40px',
            height: 'auto',
            margin: '2px',
            flexShrink: 0, // 防止图片被压缩
        }
    };

    return (
        <div style={styles.outerContainer}>
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
        </div>
    );
}

export default Example1;