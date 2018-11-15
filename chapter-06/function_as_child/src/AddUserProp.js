// https://codedaily.io/tutorials/6/Using-Functions-as-Children-and-Render-Props-in-React-Components
// https://americanexpress.io/faccs-are-an-antipattern/

// 这里是将function 作为组件的child

import React from 'react';

const loggedinUser = 'mock user';

class AddUserProp extends React.Component {
  render() {
    const user = loggedinUser;
    return this.props.children(user)
  }
}

AddUserProp.propTypes = {
  children: React.PropTypes.func.isRequired
}

export default AddUserProp;


