import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import GlideCarousel2 from 'common/src/components/GlideCarousel2';
import GlideSlide2 from 'common/src/components/GlideCarousel2/glideSlide2';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import GliderSlider2Wrapper from './glideslider2.style';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/src/components/Image';

const GlideSlider1 = ({ secTitleWrapper, secText, secHeading }) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
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
  const glide2option = {
    type: 'carousel',
    autoplay: 1000,
    perView: 5,
    gap: 0,
    animationDuration: 3000,
    animationTimingFunc: 'linear',
    peek: {
      before: 100,
      after: 100,
    },
    breakpoints: {
      800: {
        perView: 3,
        peek: {
          before: 80,
          after: 80,
        },
      },
      575: {
        perView: 2,
        peek: {
          before: 30,
          after: 30,
        },
      },
    },
  };
  return (
    <>
      <GliderSlider2Wrapper className="section_background_color">
        <Container fullWidth noGutter>
          <Box {...secTitleWrapper}>
            {/* <Text {...secText} content="Our Customers" /> */}
            <Heading {...secHeading} content="Some Of Our Happy Customers" />
          </Box>
          <GlideCarousel2
            options={glide2option}
            nextButton={
              <Button
                icon={<i className="flaticon-next" />}
                variant="textButton"
                aria-label="next button"
              />
            }
            prevButton={
              <Button
                icon={<i className="flaticon-left-arrow" />}
                variant="textButton"
                aria-label="prev button"
              />
            }
          >
            <>
              {Data.hostingJson.CUSTOMERS_S.map((cusslideItem, index) => (
                <GlideSlide2 key={`customers-slide-${index}`}>
                  <Image
                    src={cusslideItem.avatar.childImageSharp.fluid.src}
                    alt={`customers-${index}`}
                  />
                </GlideSlide2>
              ))}
            </>
          </GlideCarousel2>
          <div className="empty_space30" />
        </Container>
      </GliderSlider2Wrapper>
    </>
  );
};

GlideSlider1.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
};
GlideSlider1.defaultProps = {
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
export default GlideSlider1;

{
  /* <GlideSlide>
<img src={Image1} />
</GlideSlide>
<GlideSlide>
<img src={Image2} />
</GlideSlide>
<GlideSlide>
<img src={Image3} />
</GlideSlide>
<GlideSlide>
<img src={Image4} />
</GlideSlide>
<GlideSlide>
<img src={Image5} />
</GlideSlide> */
}
