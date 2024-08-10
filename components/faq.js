import React from 'react';

import PropTypes from 'prop-types';

const FAQ = (props) => {
  return (
    <>
      <div
        className={`faq-accordion ${props.rootClassName} `}
      >
        <div
          data-role='accordion-container'
          className='faq-element accordion-element'
        >
          <div className='faq-details'>
            <span className='faq-text'>
              How do I book a service with Trego?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span
              data-role='accordion-content'
              className='faq-text01'
            >
              Simply use our app or website to find a nearby
              authorized service center, choose a date and
              time that works for you, and confirm your
              booking in just a few clicks.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        <div
          data-role='accordion-container'
          className='faq-element1 accordion-element'
        >
          <div className='faq-details1'>
            <span className='faq-text02'>
              Can I get my vehicle picked up and dropped
              off?
            </span>
            <span
              data-role='accordion-content'
              className='faq-text03'
            >
              Yes, Trego offers convenient pickup and
              drop-off services for your vehicle, so you can
              focus on your day without any interruptions.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon02'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        <div
          data-role='accordion-container'
          className='faq-element2 accordion-element'
        >
          <div className='faq-details2'>
            <span className='faq-text04'>
              How will I explain problems in my Bike or Car?
            </span>
            <span
              data-role='accordion-content'
              className='faq-text05'
            >
              You can provide all the problems with your
              bike at the time of booking. This way, the
              service center will have a complete
              understanding of the issues and can prepare
              accordingly.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon04'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        <div
          data-role='accordion-container'
          className='faq-element3 accordion-element'
        >
          <div className='faq-details3'>
            <span className='faq-text06'>
              What types of services are available through
              Trego?
            </span>
            <span
              data-role='accordion-content'
              className='faq-text07'
            >
              We offer a wide range of services, including
              regular maintenance, repairs, insurance
              assistance, PUC, and more, all through
              authorized service centers.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon06'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        <div
          data-role='accordion-container'
          className='faq-element4 accordion-element'
        >
          <div className='faq-details4'>
            <span className='faq-text08'>
              Are there any discounts or offers available?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span
              data-role='accordion-content'
              className='faq-text09'
            >
              Yes, Service Centers have curated special
              discounts & offers for Trego on various
              services, helping you save money while
              maintaining your vehicle.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon08'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        <div
          data-role='accordion-container'
          className='faq-element5 accordion-element'
        >
          <div className='faq-details5'>
            <span className='faq-text10'>
              Is my vehicle's warranty maintained when using
              Trego?
            </span>
            <span
              data-role='accordion-content'
              className='faq-text11'
            >
              Absolutely. By choosing authorized service
              centers through Trego, your vehicle’s warranty
              remains intact.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon10'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        <div
          data-role='accordion-container'
          className='faq-element5 accordion-element'
        >
          <div className='faq-details5'>
            <span className='faq-text10'>
              What if I need assistance with an insurance
              claim?
            </span>
            <span
              data-role='accordion-content'
              className='faq-text11'
            >
              Trego provides comprehensive service
              assistance including help with insurance
              claims.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon10'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
        {/* <div
          data-role='accordion-container'
          className='faq-element5 accordion-element'
        >
          <div className='faq-details5'>
            <span className='faq-text10'>
              What if I need assistance with an insurance
              claim?{' '}
            </span>
            <span
              data-role='accordion-content'
              className='faq-text11'
            >
              Trego provides comprehensive service
              assistance including help with insurance
              claims.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon10'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div> */}
        <div
          data-role='accordion-container'
          className='faq-element5 accordion-element'
        >
          <div className='faq-details5'>
            <span className='faq-text10'>
              Will Trego help with post-service feedback?
            </span>
            <span
              data-role='accordion-content'
              className='faq-text11'
            >
              Yes, Trego values your feedback. After your
              service, you will have the opportunity to
              provide feedback on your experience. Your
              input helps us improve our services and
              ensures that we continue to meet your
              expectations.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role='accordion-icon'>
            <svg
              viewBox='0 0 1024 1024'
              className='faq-icon10'
            >
              <path d='M366 708l196-196-196-196 60-60 256 256-256 256z'></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq-element {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(
              --dl-space-space-threeunits
            );
          }
          .faq-details {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text01 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .faq-icon {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(
              --dl-space-space-threeunits
            );
          }
          .faq-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text02 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text03 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon02 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(
              --dl-space-space-threeunits
            );
          }
          .faq-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text04 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text05 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon04 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(
              --dl-space-space-threeunits
            );
          }
          .faq-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text06 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text07 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(
              --dl-space-space-threeunits
            );
          }
          .faq-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text08 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text09 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element5 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(
              --dl-space-space-threeunits
            );
          }
          .faq-details5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text10 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text11 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq-text {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text02 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text04 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text06 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text08 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text10 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  );
};

FAQ.defaultProps = {
  rootClassName: '',
};

FAQ.propTypes = {
  rootClassName: PropTypes.string,
};

export default FAQ;
