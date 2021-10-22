import * as React from 'react';
import './style.css';
import MenuBar from './Components/MenuBar';

class Header2 extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header">
        <div className="menuBarWrapper"> 
          <MenuBar />
        </div>
      </div>
    );
  }
}

export default Header2;