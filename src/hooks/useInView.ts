import React from 'react';

interface useInViewProps {
	options?: IntersectionObserverInit;
	targetRef: React.RefObject<any>;
}

const useInView = (targetRef: any, options: IntersectionObserverInit) => {
	const [inView, setInView] = React.useState<boolean>(false);

	const optionsMemo = React.useMemo(() => {
		return options;
	}, [options]);

	const callBackFunc = (entries: Array<IntersectionObserverEntry>) => {
		const [entry] = entries;
		setInView(entry.isIntersecting);
	};

	React.useEffect(() => {
		const observer = new IntersectionObserver(callBackFunc, optionsMemo);
		const currentTarget = targetRef.current;
		if (currentTarget) {
			observer.observe(currentTarget);
		}

		return () => {
			if (currentTarget) {
				observer.unobserve(currentTarget);
			}
		};
	}, [optionsMemo]);

	return inView;
};

export default useInView;
