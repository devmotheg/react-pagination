/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const MAX_PAGE = 15;

const Interface = ({
	isPreviousData,
	page,
	setPage,
}: {
	isPreviousData: boolean;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
	let pages = [];
	for (let i = -2; i <= 2; i++) pages.push(page + i + 1);
	if (page - 2 < 0) pages = [1, 2, 3, 4, 5];
	if (page + 2 > MAX_PAGE - 1) pages = [11, 12, 13, 14, 15];

	return (
		<div className="flex items-center justify-center gap-4 my-8">
			<button
				className="block pr-4 font-bold capitalize transition border-r-2 border-black border-solid disabled:text-red-600 text-slate-600 hover:text-sky-600"
				onClick={() => setPage(page => (page - 1 + MAX_PAGE) % MAX_PAGE)}
				disabled={isPreviousData}>
				prev
			</button>
			{pages.map(n => {
				const styling =
					n === page + 1 ? "bg-white text-sky-600" : "bg-sky-600 text-white";

				return (
					<button
						key={n}
						className={`w-8 h-8 flex items-center justify-center text-sm font-bold ${styling} transition border-2 border-solid rounded hover:bg-white hover:text-sky-600 border-sky-600`}
						onClick={() => setPage(n - 1)}>
						{n}
					</button>
				);
			})}
			<button
				className="block pl-4 font-bold capitalize transition border-l-2 border-black border-solid disabled:text-red-600 text-slate-600 hover:text-sky-600"
				onClick={() => setPage(page => (page + 1) % MAX_PAGE)}
				disabled={isPreviousData}>
				next
			</button>
		</div>
	);
};

export default Interface;
