import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/Hosting/Navbar';
import InfoHomeSection from '../containers/Hosting/InfoHome';

import TestimonialSection from '../containers/Hosting/Testimonials';
import ContactMap from '../containers/Hosting/ContactMap';
import Footer from '../containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../components/seo';

import Fullslider1 from '../containers/Hosting/Fullslider1';
import GlideSlider1 from "../containers/Hosting/GlideSlider1/index";
import Ctasection from '../containers/Hosting/Ctasection';

export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Cnetric Global Inc" />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper className="Home_page">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <Fullslider1 />
          <InfoHomeSection />
          <GlideSlider1 />
          <TestimonialSection />
          <ContactMap />
          <Ctasection />
         <Footer />
        </ContentWrapper>
        <div id="footerWrapper" className="copyright">
          <p style={{textAlign: 'center'}}>Copyright 2020 @Cnetric Global. All Rights Reserved.</p>
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
