/** @jsx React.DOM */

var React = require('react/addons');

var adData = require('../data/adData').adData;

var ReactApp = React.createClass({
      config: {
          title: adData.title,
          description: adData.description,
          style: {
              backgroundImage: 'url(free-vector-banners-02_7538.jpg)'
          }
      },
      render: function () {
        return (
          <div id="banner-area" style={this.config.style}>
            <h3>{this.config.title}</h3>
            <p>{this.config.description}</p>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;