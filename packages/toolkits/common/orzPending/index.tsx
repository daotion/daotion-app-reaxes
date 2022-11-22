/**
 * pending状态和error状态
 */
export const orzPending = () => {
	const [, [pendingState, setPending]] = utils.makePair(orzMobx({ 
		pending: false ,
		error : false ,
	}), ({ store, setState }) => {
		return [
			store ,
			(pending : boolean) => queueMicrotask(() => setState({ pending })) ,
			(error : boolean) => queueMicrotask(() => setState({ error })),
		] as const;
	});
	return { pendingState, setPending };
};
