import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div>{"https://geosyncgo.com/public/wmu-advisory-app" + this.props.location.search}</div>
        <iframe title="map" src="https://geosyncgo.com/public/wmu-advisory-app"></iframe>
      </Layout>
    )
  }
}
