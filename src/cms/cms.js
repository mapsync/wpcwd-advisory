import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import MapPagePreview from './preview-templates/MapPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('map', MapPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
