export { Requester } from '#requester';

const middles = [
	(next) => {
		console.log(1);
		return next(1);
	},
	(next) => {
		console.log(2);
		return next(2);
	},
	(next) => {
		console.log(3);
		return next(3);
	},
];

function compose(arr) {
	function dispath(index) {
		if (index === arr.length) return NaN;

		const current = arr[index];
		const next = () => dispath(index + 1); // 递归执行数组中下一个函数
		return current(next);
	} 

	return dispath(0);
}

console.log(compose(middles));


