export interface SignalStrengthPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  dbm(): Promise<{measuredDbm:number}>;
}
