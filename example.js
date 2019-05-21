import webtrekkSmartPixelAngular from "./debug";

/**
 * @constructor
 */
var ApplicationTracking = function() {
    this.init = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.init.set({
                trackId: '123451234512345',
                trackDomain: 'data.wt-eu02.net'
            });
        });
    };

    this.page = function(name, data) {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.page.data.set(name, data);
        });
    };

    this.action = function(data) {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.action.data.set(data);
        });
    };

    this.track = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.track();
        });
    };

    this.trackPage = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.trackPage();
        });
    };

    this.trackAction = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.trackAction();
        });
    };
};

export default new ApplicationTracking();
