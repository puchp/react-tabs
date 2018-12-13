import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }





  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        disable
      },
    } = this;

    let className = 'fm-match__navigation__item';

    if (activeTab === label) {
      className = ' fm-match__navigation__item fm-match__navigation__item--active';
    }

    return (
      <React.Fragment>
      {disable ?
        null
        :
        <li
          className={className}
          onClick={onClick}
        >
          <a>{label}</a>
        </li>
      }
      </React.Fragment>

    );
  }
}


export default Tab;
