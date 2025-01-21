import PropTypes from 'prop-types';
import "./cripto.css"
import { Link } from 'react-router-dom';
const Crypto = ({id, name, priceUsd, symbol, changePercent24Hr}) =>{
    return (
        <div className='crypto'>
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">codigo: </span>{symbol}</p>
                <p>
                    <span className="label">Variacion cada 24H: </span>
                    <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>{
                    parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

Crypto.propTypes = {
    name: PropTypes.string.isRequired,
    priceUsd: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Crypto