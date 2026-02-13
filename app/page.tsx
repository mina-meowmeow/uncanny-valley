'use client';

import { useSession } from '@/lib/contexts/sessionsContext';
import ExperimentView from '@/components/pages/experiment/ExperimentView';

function Home() {
	const { session } = useSession();
	console.log('Session data on Home page:', session);
	return (
		<ExperimentView
			viewType={session?.userData?.experimentConfig?.viewType || 'product'}
			presenterType={session?.userData?.experimentConfig?.presenterType || 'AI'}
		/>
	);
}

export default Home;
