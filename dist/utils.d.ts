interface Methods {
    channel: string;
    user: string;
    emoji: string;
    webhook: string;
    guild: string;
    invite: string;
    voice: string;
    bot: string;
    auditLog: string;
}
export declare function wrapRequest<R extends keyof Methods, M extends keyof import("snowtransfer")[R]>(snowtransfer: import("snowtransfer"), resource: R, method: M, res: import("express").Response, ...args: Array<any>): Promise<import("express").Response<any>>;
declare const _default: {
    wrapRequest: typeof wrapRequest;
};
export default _default;
