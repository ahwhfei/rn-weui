// Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />

import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import WeuiIcon from './Weui'

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
    alignSelf: 'center'
  }
})

const glyphMap = {
  success: {
    size: 23,
    color: '#09BB07'
  },
  waiting: {
    size: 23,
    color: '#10AEFF'
  },
  warn: {
    size: 23,
    color: '#F43530'
  },
  info: {
    size: 23,
    color: '#10AEFF'
  },

  success_circle: {
    size: 23,
    color: '#09BB07'
  },
  success_no_circle: {
    size: 23,
    color: '#09BB07'
  },
  waiting_circle: {
    size: 23,
    color: '#10AEFF'
  },
  circle: {
    size: 23,
    color: '#C9C9C9'
  },
  download: {
    size: 23,
    color: '#09BB07'
  },

  info_circle: {
    size: 23,
    color: '#09BB07'
  },

  safe_success: {
    color: '#09BB07'
  },
  safe_warn: {
    color: '#FFBE00'
  },
  cancel: {
    size: 22,
    color: '#F43530'
  },

  search: {
    size: 14,
    color: '#B2B2B2'
  },

  clear: {
    size: 14,
    color: '#B2B2B2'
  },
  msg: {
    size: 104,
    warn: {
      color: '#F76260'
    },
  },
  safe: {
    size: 104,
  },
}

const Icon = (props) => {
  const {
    name = 'success',
    msg = false,
    size = msg ? glyphMap.msg.size : glyphMap[name].size,
    color = glyphMap[name].color,
    style
  } = props

  return (<WeuiIcon
    name={name}
    size={size}
    color={color}
    style={[styles.icon, style]}
  />)
}

Icon.propTypes = {
  msg: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: Text.propTypes.style,
}

export default Icon
