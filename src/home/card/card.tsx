import { Link } from 'react-router-dom'
import './card.css'
import CharacterLimit from '../../shared/characterlimit'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({item, editable = false, editCard, removeCard}) {
  return (
    <>
        <li className='card-li'>
            {
                editable && 
                <div className="abs-li">
                    <button className='abs-button abs-delete'
                        onClick={() => removeCard(item.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} className='abs-icon'/>
                    </button>
                    <button className='abs-button abs-edit'
                        onClick={() => editCard(item)}
                    >
                        <FontAwesomeIcon icon={faEdit} className='abs-icon'/>
                    </button>
                </div>
            }
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
                    <button className="shopnow-wrap">
                        <div className="shopnow">View</div>
                    </button>
                </div>
            </section>
            </Link>
        </li>
    </>
  )
}
