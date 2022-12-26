import { WebPlugin } from '@capacitor/core';
export class SignalStrengthWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map