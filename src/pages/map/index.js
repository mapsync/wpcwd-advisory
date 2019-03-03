import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/e2080ba6-7192-4d74-afdb-390d7b1db825" + this.props.location.search;
  }
  
  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank" allow="geolocation"></iframe>
      </Layout>
    )
  }
}
