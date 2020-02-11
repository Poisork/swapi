import React from 'react'
import {PropTypes as T} from 'prop-types'
import {withTranslation} from 'react-i18next'

const RenderPropsWithTranslation = ({item, t, render}) => {
  return render({item, t})
}

RenderPropsWithTranslation.propTypes = {
  item: T.object,
  t: T.func,
}

export default React.memo(withTranslation()(RenderPropsWithTranslation))
