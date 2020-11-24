import SnowTransfer from "snowtransfer";
interface Config {
    token: string;
    host: string;
    port: number;
    apiVersion?: number;
    options?: {
        baseHost?: string;
        disableEveryone?: boolean;
    };
}
declare class SnowGate {
    config: Config;
    snowtransfer: SnowTransfer;
    app: import("express").Application;
    started: boolean;
    constructor(config: Config, snowtransfer?: SnowTransfer);
    start(): Promise<void>;
}
export = SnowGate;
