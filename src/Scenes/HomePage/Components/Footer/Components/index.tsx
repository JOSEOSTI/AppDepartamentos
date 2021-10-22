import * as React from 'react';
import './style.css';

import ListComp from './ListComp';
import GetInTouch from './GetInTouch';
import Subscribe from './Subscribe';

class FooterContainer extends React.Component<{}, {}> {
  listCompany =  [
    'Acerca de',
    'Blog',
    'Ayuda',
    'Políticas',
    'Condiciones y privacidad'
  ];
  listDiscover = [
    'Convertirse en miembro',
    'Lista de propiedades',
    'Registrarse',
    'Widgets',
    'Componentes'
  ];
  render() {
    return (
      <div className="footerContainer">
        <div className="row">
            <ListComp list={this.listCompany}>Compañía</ListComp>
            <ListComp list={this.listDiscover}>Descubrir</ListComp>
            <GetInTouch>Ponerse en contacto</GetInTouch>
            <Subscribe>Suscríbete a nuestro boletín</Subscribe>
        </div>
        <div className="footerCopyRight">
        club-trueque.com<br/> © Derechos Reservados Club Trueque.
        </div>
      </div>
    );
  }
}

export default FooterContainer;