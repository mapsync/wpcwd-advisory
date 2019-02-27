import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/d3bdd463-6d50-478d-88ad-d7d5114ab1ef" + this.props.location.search;
  }
  
  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank"></iframe>
      </Layout>
    )
  }
}
