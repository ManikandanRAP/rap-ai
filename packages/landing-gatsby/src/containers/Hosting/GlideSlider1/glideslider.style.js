import styled from 'styled-components';

const GliderSlider1Wrapper = styled.section`
  img {
      width: 100%;
      height: 100%;
      max-width: 150px;
      max-height: 100px;
      display: block;
      margin: 0 auto;
      object-fit: contain;
  }
  button {
    display: none;
  }
  ul.glide__slides {
    align-items: center !important;
  }
  @media only screen and (max-width: 575px){
    img {
        max-width: 130px;
        max-height: 80px;
    }
  }
`;


export default GliderSlider1Wrapper;
