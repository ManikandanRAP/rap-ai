
import React from "react";
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import GlideCarousel2 from 'common/src/components/GlideCarousel2';
import GlideSlide2 from 'common/src/components/GlideCarousel2/glideSlide2';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import GliderSlider1Wrapper from "./glideslider.style"
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/src/components/Image';

const GlideSlider1 = ({
    secTitleWrapper,
    secText,
    secHeading,
}) => {

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

    const glide1option = {
        type: 'carousel',
        autoplay: 4000,
        perView: 5,
        gap: 0,
        animationDuration: 800,
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
    const glide2option = {
        type: 'carousel',
        autoplay: 4000,
        perView: 5,
        gap: 0,
        animationDuration: 800,
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
            <GliderSlider1Wrapper className="section_background_color">
                <Container fullWidth noGutter>
                    <Box {...secTitleWrapper}>
                        <Text {...secText} content="Our Partners" />
                        {/* <Heading {...secHeading} content="What’s clients say" /> */}
                    </Box>
                    <GlideCarousel
                        options={glide1option}
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

                            {Data.hostingJson.PARTNERS.map((slideItem, index) => (
                                <GlideSlide key={`partners-slide-${index}`}>
                                    <Image src={slideItem.avatar.childImageSharp.fluid.src} alt={`partners-${index}`} />
                                </GlideSlide>
                            ))}
                        </>
                    </GlideCarousel>
                </Container>
            </GliderSlider1Wrapper>
            <GliderSlider1Wrapper>
                <Container fullWidth noGutter>
                    <Box {...secTitleWrapper}>
                        <Text {...secText} content="Our Customers" />
                        {/* <Heading {...secHeading} content="What’s clients say" /> */}
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
                                    <Image src={cusslideItem.avatar.childImageSharp.fluid.src} alt={`customers-${index}`} />
                                </GlideSlide2>
                            ))}
                        </>
                    </GlideCarousel2>

                </Container>
            </GliderSlider1Wrapper>

        </>
    );
}

GlideSlider1.propTypes = {
    secTitleWrapper: PropTypes.object,
    secHeading: PropTypes.object,
    secText: PropTypes.object,
};
GlideSlider1.defaultProps = {
    secTitleWrapper: {
        mb: ['10px', '15px', '15px', '15px'],
    },
    secText: {
        as: 'span',
        display: 'block',
        textAlign: 'center',
        fontSize: '22px',
        letterSpacing: '0.15em',
        fontWeight: '600',
        color: '#06324e',
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
};
export default GlideSlider1

{/* <GlideSlide>
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
</GlideSlide> */}