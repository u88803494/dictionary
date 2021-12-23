import { FC } from 'react';

import Navbar from './navbar';

const Layout: FC = ({ children }) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
};
  
export default Layout;
