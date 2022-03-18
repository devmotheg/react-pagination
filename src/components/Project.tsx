/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";
import { useQuery } from "react-query";

import UserCard from "./UserCard";
import Interface from "./Interface";

const DATA_URL = "https://api.github.com/users?per_page=10&since=";

const fetchUsers = async ({ queryKey }: any) => {
	try {
		const res = await fetch(DATA_URL + queryKey[1] * 100);
		if (res.status !== 200) throw new Error();
		const users = await res.json();
		return users;
	} catch (err) {
		throw err;
	}
};

const Project = () => {
	const [page, setPage] = useState(0);
	const {
		isPreviousData,
		status,
		data: users,
	} = useQuery(["page", page], fetchUsers, {
		keepPreviousData: true,
	});

	return (
		<>
			<h1 className="relative py-4 mx-auto mb-12 text-4xl font-bold capitalize w-fit after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-sky-600">
				pagination
			</h1>
			<main>
				{status === "loading" ? (
					<h2 className="mb-16 text-3xl font-bold text-center capitalize">
						loading...
					</h2>
				) : status === "error" ? (
					<h2 className="mb-16 text-3xl font-bold text-center">
						Fetching failed (it's probably GitHub's rate limiter).
						<br />
						Refresh the page or come back later...
					</h2>
				) : (
					<div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] justify-center gap-14">
						{users?.map((u: any) => (
							<UserCard key={u.id} {...u} />
						))}
					</div>
				)}
				<Interface
					page={page}
					setPage={setPage}
					isPreviousData={isPreviousData}
				/>
			</main>
		</>
	);
};

export default Project;
