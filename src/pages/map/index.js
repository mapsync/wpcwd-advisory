import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  
  didComponentMount(){
    this.setState({
      loaded: true
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <Layout>
          <iframe title="map" src={`https://geosyncgo.com/public/wmu-advisory-app${this.props.location.search}`}></iframe>
        </Layout>
      )
    }
    else {
      return null
    }
  }
}
