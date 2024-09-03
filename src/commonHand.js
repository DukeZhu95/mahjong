import React from 'react';

function CommonHand() {
    const tiles = [
        '/MJw2.png', '/MJw3.png', '/MJw4.png',  // 顺子
        '/MJw6.png', '/MJw6.png', '/MJw6.png',  // 刻子
        '/MJs7.png', '/MJs8.png', '/MJs9.png',  // 顺子
        '/MJt4.png', '/MJt5.png', '/MJw2t6.png',  // 顺子
        '/MJt2.png', '/MJt2.png'  // 对子
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
                    src={`/Images/${tile}`}
                    alt={`麻将${tile}`}
                    style={styles.tile}
                />
            ))}
        </div>
    );
}

export default CommonHand;
