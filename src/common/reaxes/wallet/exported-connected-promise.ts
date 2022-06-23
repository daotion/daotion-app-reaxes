
const ref = {
	connectedPromise : orzPromise()
};

export const getConnectedPromise = () => ref.connectedPromise;
export const setConnectedPromise = () => ref.connectedPromise = orzPromise();
