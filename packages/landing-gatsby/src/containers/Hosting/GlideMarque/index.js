import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/src/components/Image';

import GlideMarqueWrapper from './glidemarque.style';

const GlideMaqure = ({ secTitleWrapper, secText, secHeading }) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        PARTNERS {
          avatar {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        CUSTOMERS_S {
          avatar {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <GlideMarqueWrapper className="section_background_color">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <ul>
            {Data.hostingJson.PARTNERS.map((slideItem, index) => (
              <li key={`partners-slide-${index}`}>
                <Image
                  src={slideItem.avatar.childImageSharp.fluid.src}
                  alt={`partners-${index}`}
                />
              </li>
            ))}
          </ul>
          <ul>
            {Data.hostingJson.CUSTOMERS_S.map((cusslideItem, index) => (
              <li key={`customers-slide-${index}`}>
                <Image
                  src={cusslideItem.avatar.childImageSharp.fluid.src}
                  alt={`customers-${index}`}
                />
              </li>
            ))}
          </ul>
        </marquee>
        <div className="empty_space30" />
      </GlideMarqueWrapper>
    </>
  );
};

GlideMaqure.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
};
GlideMaqure.defaultProps = {
  secTitleWrapper: {
    as: 'section',
    // mt: ['10px', '15px', '15px', '40px'],
    // pb: ['10px', '15px', '15px', '40px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    // color: '#06324e',
    pb: '20px',
    mt: '25px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    color: 'headingColor',
    // letterSpacing: '-0.025em',
    pt: '40px',
    pb: '30px',
  },
};
export default GlideMaqure;
