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

import BannerSolutionsSection from '../../containers/Hosting/BannerSolution';

import InfoSolutionSection from '../../containers/Hosting/InfoSolutions';
import Ctasection from '../../containers/Hosting/Ctasection';

const HeadlessCommercePage = () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Cnetric Global Inc" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper className="Experience_analytics_page">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSolutionsSection />
          <InfoSolutionSection />
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

export default HeadlessCommercePage;
