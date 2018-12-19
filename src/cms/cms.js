import CMS from 'netlify-cms'
import MapPagePreview from './preview-templates/MapPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from "react-helmet";

const style = {
  send: {
    border: '0',
    background: 'rgb(23, 162, 184)',
    color: 'white',
    'font-weight': '500',
    height: '36px',
    'line-height': '36px',
    padding: '0 40px 0 20px',
    float: 'right',
    width: '200px'
  }
}

const encode = function (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

var NotificationControl = class Control extends React.Component {
  handleClick() {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        "name": "test",
        "email": "test@test.com",
        "message": "testtest"
      })
    })
      .catch(error => alert(error));
  }

  render() {
    return (
      <div>
        <Helmet>
            <style type="text/css">{`
              [role="button"]
              {
                  display: none;
              }
            `}</style>
          </Helmet>
        <button style={style.send} onClick={this.handleClick} type="button">Submit</button>
      </div>
    );
  }
}

CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('map', MapPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerWidget('notification', NotificationControl)
