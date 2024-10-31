import React from 'react'


interface CryptoCardProps {
    name: string;
    price: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({name, price}) => {
    return (
        <div className="crypto-card">
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    )
};


export default CryptoCard;