/**
 * Created by Chiragkumar Rupani on 10/16/2015.
 */

jest.dontMock('../ReactApp.js');

describe('BannerAd', function() {
    it('changes the text after click', function() {
        var React = require('react/addons');
        var ReactApp = require('../ReactApp.js');
        var TestUtils = React.addons.TestUtils;

        // Render a checkbox with label in the document
        var bannerAd = TestUtils.renderIntoDocument(
            <ReactApp />
        );

        var banner = TestUtils.findRenderedDOMComponentWithTag(
            bannerAd, 'div');
        expect(React.findDOMNode(banner)).toBeDOMComponent();

        // Verify that it's Off by default
        var title = TestUtils.findRenderedDOMComponentWithTag(
            bannerAd, 'h3');
        expect(React.findDOMNode(title).textContent).toEqual('New Banner Ad');

        // Simulate a click and verify that it is now On
        var description = TestUtils.findRenderedDOMComponentWithTag(
            bannerAd, 'p');
        expect(React.findDOMNode(description).textContent).toEqual('This banner ad is an isomorphic ad.');
    });
});