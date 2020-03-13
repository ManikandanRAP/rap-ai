import React from 'react';
import SEO from '../components/seo';
import ErrorSec from '../containers/Error';
import { ResetCSS } from 'common/src/assets/css/style';

import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Hosting/Navbar';
import Footer from '../containers/Hosting/Footer';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <ResetCSS />
    {/* <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
      <DrawerProvider>
        <Navbar />
      </DrawerProvider>
    </Sticky> */}
    <ErrorSec></ErrorSec>
    {/* <Footer />
    <div id="footerWrapper" className="copyright">
      <p style={{ textAlign: 'center' }}>
        Copyright 2020 @Cnetric Global. All Rights Reserved.
      </p>
    </div> */}
  </>
);

export default NotFoundPage;
