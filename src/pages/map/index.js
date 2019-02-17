import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/9c6053d0-4304-49e1-a64b-0466c7018bad" + this.props.location.search;
  }
  
  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank"></iframe>
      </Layout>
    )
  }
}
