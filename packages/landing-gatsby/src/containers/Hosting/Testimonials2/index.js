import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import TestimonialSecWrapper2, {
  ImageWrapper,
} from './testimonials2.style';

const TestimonialSection2 = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
}) => {
  const Datas = useStaticQuery(graphql`
    query {
      hostingJson {
        TESTIMONIALSS {
          name
          designation
          review
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

  //Carousel Options
  const carouselOptions2 = {
    type: 'carousel',
    autoplay: false,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    peek: {
      before: 390,
      after: 390,
    },
    breakpoints: {
      1800: {
        perView: 2,
        peek: {
          before: 220,
          after: 220,
        },
      },
      1400: {
        perView: 2,
        peek: {
          before: 160,
          after: 160,
        },
      },
      1200: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      800: {
        perView: 1,
        peek: {
          before: 120,
          after: 120,
        },
      },
      575: {
        perView: 1,
        peek: {
          before: 0,
          after: 0,
        },
      },
    },
  };

  return (
    <TestimonialSecWrapper2 id="testimonial_section2">
      <Container fullWidth noGutter>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="TESTIMONIALS" />
          <Heading {...secHeading} content="What’s clients say" />
        </Box>
        <GlideCarousel
          options={carouselOptions2}
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
            {Datas.hostingJson.TESTIMONIALSS.map((slideItem, index) => (
              <GlideSlide key={`testimonial-slide-${index}`}>
                  <Box>
                    <ImageWrapper>
                      <Image
                        fluid={
                          (slideItem.avatar !== null) | undefined
                            ? slideItem.avatar.childImageSharp.fluid
                            : {}
                        }
                        alt={`reviewer-image-${index}`}
                      />
                    </ImageWrapper>
                  </Box>
              </GlideSlide>
            ))}
          </>
        </GlideCarousel>
      </Container>
    </TestimonialSecWrapper2>
  );
};

TestimonialSection2.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  reviewStyle: PropTypes.object,
  TestimonialMeta: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
};

TestimonialSection2.defaultProps = {
  secTitleWrapper: {
    mb: ['40px', '40px', '50px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  reviewStyle: {
    fontSize: ['16px', '16px', '17px', '17px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '40px', '55px'],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center',
  },
  nameStyle: {
    as: 'h3',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px',
  },
  designationStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#6f7a87',
    mb: '0',
  },
};

export default TestimonialSection2;
