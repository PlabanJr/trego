import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <section className={`card-card ${props.rootClassName} `}>
        <div className="card-icon">
          <img alt={props.iconAlt} src={props.icon} className="card-icon1" />
        </div>
        <main className="card-content">
          <h1 className="card-header">{props.header}</h1>
          <p className="card-description">{props.description}</p>
        </main>
      </section>
      <style jsx>
        {`
          .card-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .card-icon {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: #80ff44;
          }
          .card-icon1 {
            height: 30px;
            object-fit: cover;
          }
          .card-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .card-description {
            color: #c2c6cc;
            font-family: Poppins;
            line-height: 28px;
          }

          @media (max-width: 991px) {
            .card-root-class-name {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name2 {
              flex: 0 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  icon: '/Icons/group%201316-200w.png',
  iconAlt: 'image',
  header: 'Sima Mosbacher',
}

Card.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  header: PropTypes.string,
}

export default Card
