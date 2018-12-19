import CMS from 'netlify-cms'

import MapPagePreview from './preview-templates/MapPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('map', MapPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
