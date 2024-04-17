import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'

export var Playground = ({ style }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
        ...style,
      }}
      data-uid='a7b'
    >
      <div
        style={{
          height: 'max-content',
          position: 'absolute',
          left: 163,
          top: 305,
          display: 'flex',
          flexDirection: 'row',
          width: 'max-content',
          gap: 10,
        }}
        data-uid='b15'
      >
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
          data-uid='b0e'
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
          data-uid='aaf'
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
          data-uid='aam'
        />
      </div>
    </div>
  )
}
