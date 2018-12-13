import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeTab!==this.props.activeTab){
      // console.log("nextProps.activeTab",nextProps.activeTab);
      // console.log("State.activeTab",this.state.activeTab);
      // console.log("props.activeTab",this.props.activeTab);
      this.setState({activeTab: nextProps.activeTab });
    }
    if (this.props.reOpenMode) {
      this.setState({activeTab: nextProps.activeTab });
    }
  }

  componentDidMount=()=>{
    if (this.props.activeTab) {
      this.setState({ activeTab: this.props.activeTab });
    }
    // console.log("this.props.children",this.props.children);
    //this is float fixed nav from stylesheet
    //fm-navigation__wrapper
    //fm-navigation__list

    //fm-match__navigation
    //fm-match__navigation__content
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {onClickTabItem, props: { children }, state: { activeTab } } = this;

    return (
      <React.Fragment>

      <section className="fm-match__header fm-match__content">
      <div className="fm-match__navigation" style={{textAlign: 'center',height : '41px'}}>
        <ul className="fm-match__navigation__content">
          {children.map((child) => {
              const { label,disable } = child.props;
              return (
                <Tab
                  disable={disable}
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );

          })}
        </ul>
      </div>
      </section>

      <div className="tab-content">

        {children.map((child) => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;

        })}

      </div>
    </React.Fragment>
    );
  }
}

export default Tabs;
