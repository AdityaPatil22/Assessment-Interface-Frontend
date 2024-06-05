import { Fragment } from 'react'
import RightArrow from '../../assets/icons/RightArrow'
import './breadCrumbs.scss'
import { Link } from 'react-router-dom'


function BreadCrumbs(props) {
  return (
    <ul className="bread_crumbs">
      {props.breadCrumbsData.map(el => (
        <Fragment key={el.id}>
          <li>
            {el.link ? (
              <Link to={el.link}>{el.title}</Link>
            ) : (
              <strong>{el.title}</strong>
            )}
          </li>
          <li>
            <RightArrow />
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default BreadCrumbs