import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <iframe title="map" src={"https://geosyncgo.com/public/wmu-advisory-app" + this.props.location.search}></iframe>
      </Layout>
    );
  }
}
