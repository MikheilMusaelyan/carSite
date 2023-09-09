import { Link } from 'react-router-dom'
import './card.css'
import CharacterLimit from '../../shared/characterlimit'

export default function Card({item}) {
  return (
    <>
        <li className='card-li'>
            <Link to="/car/1" style={{ textDecoration: 'none', color: 'initial' }}>
            <section className='section'>
                <div className="item-img-wrap">
                    <img className="item-img" src={item?.images[0] || ''} /> 
                </div>
                <div className="bottom-wrap">
                    <div className="span-wrap">
                        <span className="card-name">
                            <CharacterLimit text={item?.name} limit={50} />
                        </span>
                        <span className="card-price">
                            <CharacterLimit text={`$${item?.price?.toFixed(2)}`} limit={50} />
                        </span>
                    </div>
                    <div className="shopnow-wrap">
                        <h5 className="shopnow">View</h5>
                    </div>
                </div>
            </section>
            </Link>
        </li>
    </>
  )
}
