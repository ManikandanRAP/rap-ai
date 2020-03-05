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
import FeatureSection from '../containers/Hosting/Features';
import InfoHomeSection from '../containers/Hosting/InfoHome';


import DomainSection from '../containers/Hosting/Domain';
import PaymentSection from '../containers/Hosting/Payment';
import GuaranteeSection from '../containers/Hosting/Guarantee';
import FaqSection from '../containers/Hosting/Faq';
import ServicesSection from '../containers/Hosting/Services';
// import ServicesSection2 from '../containers/Hosting/Services2';
import BannerSection from '../containers/Hosting/Banner';
import PricingSection from '../containers/Hosting/Pricing';
// import TestimonialSection from '../containers/Hosting/Testimonials';
import TestimonialSection2 from '../containers/Hosting/Testimonials2';
import ContactMap from '../containers/Hosting/ContactMap';
import ContactSection from '../containers/Hosting/Contact';
import Footer from '../containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../components/seo';


import Fullslider1 from '../containers/Hosting/Fullslider1';
import GlideSlider1 from "../containers/Hosting/GlideSlider1/index";
import IconTextSection from "../containers/Hosting/IconText";

// var FontAwesome = require('react-fontawesome');

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
          <FeatureSection />
          {/* <ServicesSection2 /> */}
          <IconTextSection />
          {/* <BannerSection />
          
          
          <PricingSection />
          <DomainSection />
          <ServicesSection />
          <PaymentSection /> */}
          {/* <TestimonialSection /> */}
          <GlideSlider1 />
          {/* <GlideSlider2 /> */}
          {/* <TestimonialSection2 /> */}
          <ContactMap />
          {/* <GuaranteeSection />
          <FaqSection />
          <ContactSection /> */}
          <Footer />
        </ContentWrapper>
        <div id="footerWrapper" className="copyright">
          <p style={{textAlign: 'center'}}>Copyright 2020 @Cnetric Global. All Rights Reserved.</p>
          <i class="fa fa-facebook"></i>
          {/* <FontAwesome
            className="super-crazy-colors"
            name="rocket"
            size="2x"
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          /> */}
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
