import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../../containers/Hosting/Navbar';
import Footer from '../../containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../../components/seo';

import BannerServicessSection from '../../containers/Hosting/BannerService';

import InfoServiceSection from '../../containers/Hosting/InfoServices';
import Ctasection from '../../containers/Hosting/Ctasection';

const DrCommercePage = () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Cnetric Global Inc" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper className="Dr_Commerce_page">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerServicessSection />
          <InfoServiceSection />
          <Ctasection />
          <Footer />
        </ContentWrapper>
        <div id="footerWrapper" className="copyright">
          <p style={{ textAlign: 'center' }}>
            Copyright 2020 @Cnetric Global. All Rights Reserved.
          </p>
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default DrCommercePage;
