import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
      </header>
    );
  }
}
export default Header;
