import React, {Component} from 'react';
import {connect} from 'react-redux';
import DomainsTable from '../DomainsTable';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';

class Domains extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
          <h1>Domains</h1>
          <DomainsTable/>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(Domains);
