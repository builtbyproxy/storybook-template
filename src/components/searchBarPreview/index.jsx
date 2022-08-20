import React from 'react';
import { capitalCase } from 'change-case'

export default function SearchBarPreview(props) {
  const { key, style, onClick, value } = props

  return (
    <div key={key} style={style} onClick={onClick}>
      <span style={{flex: 1}}>{capitalCase(value.name)}</span>
    </div>
  )
}
