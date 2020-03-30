import React from 'react';
// import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Button from 'common/src/components/Button';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Box from 'common/src/components/Box';
import DrcFeatureMenu from 'common/src/assets/image/hosting/Menu/drccover.png';
import UCFeatureMenu from 'common/src/assets/image/hosting/Menu/uccover.png';

// import MainDesktopNav, {
//   MainNavbarUl,
//   MainNavbarLi,
//   MainNavbarDropBox,
//   MainNavFlexbox,
//   MainNavbarDropUl,
//   MainNavbarDropMainLi,
//   MainNavbarDropLi,
// } from './MainDesktopMenu.style';

import './MainDesktopMenu.css';

const Maindeskmenu1 = button => (
  <nav id="desktopmenu">
    <ul className="flexboxprops">
      <li>
        <span>Menu1</span>
        <nav className="dropdownMenu dropdownMenu1 flexboxprops">
          <ul>
            <li>Engines</li>
            <li>Robotic Process Automation</li>
            <li>How It Works</li>
            <li>
              <Link to="/" className="btn-primary-link">
                Getting Started
              </Link>
            </li>
          </ul>
          <ul>
            <li className="flexboxprops">
              <span>Image</span>
              <span>
                <div>EyeMagic</div>
                <div className="empty_space10" />
                <div>Some description</div>
              </span>
            </li>
            <li className="flexboxprops">
              <span>Image</span>
              <span>
                <div>Response Genie</div>
                <div className="empty_space10" />
                <div>Some description</div>
              </span>
            </li>
          </ul>
        </nav>
      </li>
      <li>
        <span>Menu2</span>
        <nav className="dropdownMenu dropdownMenu2">
          <ul className="flexboxprops">
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Form
                <br />
                Recongnition
              </span>
              <span className="text_size12">
                Automate and accelerate form recognition with greater accuracy
                and productivity
              </span>
            </li>
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Intelligent
                <br />
                Email Response
              </span>
              <span className="text_size12">
                Expedite email response with entity and intent extraction
                automated by AI
              </span>
            </li>
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Check
                <br />
                Recongnition
              </span>
              <span className="text_size12">
                Accelerate check processing with AI-powered automation of check
                recognition tasks
              </span>
            </li>
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Quote
                <br />
                Processing
              </span>
              <span className="text_size12">
                Streamline quote processing with greater accuracy and speed
                through AI-powered automation
              </span>
            </li>
          </ul>
          <ul className="flexboxprops">
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Case
                <br />
                Deflection
              </span>
              <span className="text_size12">
                Minimize case deflection with rapid, accurate responses through
                AI automation
              </span>
            </li>
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Invoice
                <br />
                Processing
              </span>
              <span className="text_size12">
                Accurate, efficient and speedy invoice processing through
                AI-powered automation
              </span>
            </li>
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                Lease
                <br />
                Abstraction
              </span>
              <span className="text_size12">
                Rapid lease abstraction processes with high accuracy due to AI
                automation
              </span>
            </li>
            <li className="flexboxprops flexcolumnprops">
              <span>Icon</span>
              <span>
                ID
                <br />
                Verification
              </span>
              <span className="text_size12">
                Foolproof ID verification including face and signature
                verification with the power of AI
              </span>
            </li>
          </ul>
        </nav>
      </li>
      <li>
        <span>Menu3</span>
        <nav className="dropdownMenu dropdownMenu3">
          <ul>
            <li>
              <span>Icon</span>
              <span>
                Form
                <br />
                Recongnition
              </span>
            </li>
            <li>
              <span>Icon</span>
              <span>
                Form
                <br />
                Recongnition
              </span>
            </li>
          </ul>
        </nav>
      </li>
    </ul>
  </nav>
);

Maindeskmenu1.propTypes = {
  button: PropTypes.object,
};
Maindeskmenu1.defaultProps = {
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
};
export default Maindeskmenu1;
