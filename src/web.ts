import { WebPlugin } from '@capacitor/core';

import type { SignalStrengthPlugin } from './definitions';

export class SignalStrengthWeb
  extends WebPlugin
  implements SignalStrengthPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async dbm(): Promise<{ measuredDbm: number }> {
    // logic here
    console.log('SignalStrengthWeb: ini dbm');
    return { measuredDbm: 0 };
  }
}
