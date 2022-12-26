'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SignalStrength = core.registerPlugin('SignalStrength', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SignalStrengthWeb()),
});

class SignalStrengthWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async dbm() {
        // logic here
        console.log('SignalStrengthWeb: ini dbm');
        return { measuredDbm: 0 };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SignalStrengthWeb: SignalStrengthWeb
});

exports.SignalStrength = SignalStrength;
//# sourceMappingURL=plugin.cjs.js.map
