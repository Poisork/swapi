import {PropTypes as T} from 'prop-types'
import {withTranslation} from 'react-i18next'

const RenderPropsWithTranslation = ({item, t, render}) => render({item, t})

RenderPropsWithTranslation.propTypes = {
  item: T.object,
  t: T.func,
}

export default withTranslation()(RenderPropsWithTranslation)
