const Page404 = () => {
	return (
		<div className="container text-center my-52">
			<h1 className="font-extrabold text-3xl sm:text-5xl xl:text-7xl my-4 dark:text-white">
				Aw, snap!
			</h1>
			<h2 className="font-semibold text-xl sm:text-2xl xl:text-4xl my-4 dark:text-white">
				404 Not Found
			</h2>
			<p className="sm:text-lg xl:text-xl my-4">
				It seems the page you were looking for could not be found. If you
				believe this to be an error, please contact an administrator.
			</p>
			<a href="https://minefly.org" className="mt-4 btn btn-outlined btn--accent w-max">
				Back to homepage
			</a>
		</div>
	);
};

export default Page404;
