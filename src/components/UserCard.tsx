/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const UserCard = ({ avatar_url, login, html_url }: any) => {
	return (
		<div className="p-8 bg-white shadow-lg rounded-xl">
			<img
				className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md shadow-black/40"
				src={avatar_url}
				alt="user image"
			/>
			<strong className="block mb-6 text-xl font-bold text-center text-slate-600">
				{login}
			</strong>
			<a
				className="block px-3 py-1 mx-auto text-[length:0.75rem] tracking-widest text-center text-white uppercase transition border-2 border-solid rounded-full border-sky-600 hover:text-sky-600 hover:bg-white w-fit bg-sky-600"
				href={html_url}>
				view profile
			</a>
		</div>
	);
};

export default UserCard;
