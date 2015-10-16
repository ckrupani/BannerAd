/**
 * Created by Chiragkumar Rupani on 10/16/2015.
 */

var ReactTools = require('react-tools');

module.exports = {
    process: function(src) {
        return ReactTools.transform(src);
    }
};