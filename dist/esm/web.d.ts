import { WebPlugin } from '@capacitor/core';
import type { SignalStrengthPlugin } from './definitions';
export declare class SignalStrengthWeb extends WebPlugin implements SignalStrengthPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    dbm(): Promise<{
        measuredDbm: number;
    }>;
}
