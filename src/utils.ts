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

export async function wrapRequest<R extends keyof Methods, M extends keyof import("snowtransfer")[R]>(snowtransfer: import("snowtransfer"), resource: R, method: M, res: import("express").Response, ...args: Array<any>) {
	try {
		// @ts-ignore
		const result = await snowtransfer[resource][method](...args);
		return res.status(200).json(result);
	} catch (e) {
		const status = e.response ? e.response.status : 500;
		const response = {
			status,
			error: e.toString()
		};
		if (e.response) {
			Object.assign(response, e.response.data);
		}
		return res.status(status).json(response);
	}
}

export default { wrapRequest };
