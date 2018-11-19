import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

export default class Tags extends Component {
  renderListItem(item, i) {
    return (
      <li className="item" key={`tag_item_${i}`}>
        {item.skill}
      <LinearProgress variant="determinate" value={item.value} />

      </li>
    );
  }
  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="tags-section"
        icon={icon || 'rocket'}
        id="tags"
        title={sectionTitle || 'Skills & Proficiency'}
      >
        <div className="skills">
          <ul className="">
            {list.map((item, i) => {
              return this.renderListItem(item, i);
              <br/>

            })}
              <br/>

          </ul>
        </div>
      </Section>
    );
  }
}


Tags.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

