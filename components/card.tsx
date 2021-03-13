const Card = (props) => {
	const { children, title } = props;

	return (
		<>
			<div {...props} className={"relative " + props.className}>
				<div className="absolute inset-0 transform -rotate-6 bg-gradient-to-br from-purple-500 to-violet-800 rounded-xl shadow-lg" />
				<div className="relative z-10 bg-gray-100 dark:bg-gray-850 shadow-lg px-8 pt-10 pb-12 rounded-xl h-full">
					<h2 className="text-lg font-semibold mb-1">{title}</h2>
					<p>{children}</p>
				</div>
			</div>
		</>
	);
};

export default Card;
