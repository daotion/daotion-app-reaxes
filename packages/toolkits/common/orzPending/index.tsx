export const orzPending = () => {
	const [ , [ pendingState , setPending ] ] = utils.makePair(orzMobx({ pending : false }) , ({ store , setState }) => {
		return [
			store , (pending) => queueMicrotask(() => setState({ pending })) ,
		] as const;
	});
	return { pendingState , setPending };
};
