import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect, { components } from 'react-select';

import { ReactComponent as FaCaretDown } from '../../../assets/images/svgs/arrow_drop_down.svg';
import { ReactComponent as FaCaretUp } from '../../../assets/images/svgs/arrow_drop_down-up.svg';
import { SelectContainer, SpiderContainer } from './StyledDropdown.styled';

const DropdownIndicator = (props) => {

  const styleClass = props.selectProps.classNamePrefix === "spider-select" ? "white" : "primary-color";

  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ?
          <FaCaretUp
            width={10}
            height={16}
            className={styleClass}
          /> :
          <FaCaretDown
            width={10}
            height={16}
            className={styleClass}
          />
        }
      </components.DropdownIndicator>
    )
  );
};

const Dropdown = ({
  value,
  onChange,
  options,
  placeholder,
  isMulti,
  id,
  maxMenuHeight,
  styleClass,
  container,
}) => {
  const handleChange = (obj) => {
    return onChange(obj);
  };

  const styles = {
    option: (base, { isFocused }) => {
      return {
        ...base,
        ':hover': {
          ...styles[':hover'],
          backgroundColor: isFocused ? '#ff5000' : null,
          color: '#fff',
        },
      };
    },
  };

  return (
    (container === 'spider-diagram') ?
      (<SpiderContainer className="spider-diagram-dropdown custom-dropdown-wrapper">
        <ReactSelect
          id={id}
          components={{ DropdownIndicator }}
          value={value}
          onChange={handleChange}
          options={options}
          styles={styles}
          isSearchable={false}
          isMulti={isMulti}
          className={`spider-select ${styleClass}`}
          classNamePrefix="spider-select"
          placeholder={placeholder}
          maxMenuHeight={maxMenuHeight}
        />
      </SpiderContainer>
      ) : (
        <SelectContainer className="custom-dropdown-wrapper">
          <ReactSelect
            id={id}
            components={{ DropdownIndicator }}
            value={value}
            onChange={handleChange}
            options={options}
            styles={styles}
            isSearchable={false}
            isMulti={isMulti}
            className={`custom-select ${styleClass}`}
            classNamePrefix="custom-select"
            placeholder={placeholder}
            maxMenuHeight={maxMenuHeight}
          />
        </SelectContainer>
      )
  );
};

Dropdown.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.string,
  ]),
  isMulti: PropTypes.bool,
  maxMenuHeight: PropTypes.number,
};

Dropdown.defaultProps = {
  value: PropTypes.undefined,
  onChange: PropTypes.undefined,
  options: PropTypes.undefined,
  isMulti: PropTypes.undefined,
  maxMenuHeight: PropTypes.undefined,
};

DropdownIndicator.propTypes = {
  selectProps: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};

export default Dropdown;
