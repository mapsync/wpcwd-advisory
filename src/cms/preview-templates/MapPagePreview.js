import React from 'react'
import PropTypes from 'prop-types'
import { MapPageTemplate } from '../../templates/map-page'

const MapPagePreview = ({ entry, widgetFor }) => (
  <MapPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MapPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MapPagePreview
