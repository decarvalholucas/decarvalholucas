import React from 'react';

import GlobalStyle from '../../styles/global';

import { MdMenu } from 'react-icons/md';

import { LCHeader } from './styles';

export default function Header() {
  return (
    <>
      <GlobalStyle />
      <LCHeader>
        <div className="container">
          <div className="logo">decarvalholucas</div>
          <div className="menu">
            <MdMenu />
          </div>
        </div>
      </LCHeader>
    </>
  );
}
