import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: props.location.search };
  }

  render() {
    console.log(this.props.location.search)
    return (
      <Layout>
        <iframe title="map" src={"https://geosyncgo.com/public/wmu-advisory-app" + this.state.search}></iframe>
      </Layout>
    );
  }
}
