'use client';

import { useSession } from '@/lib/contexts/sessionsContext';
import ExperimentView from '@/components/pages/experiment/ExperimentView';

function Home() {
	const { session } = useSession();
	return (
		<ExperimentView
			viewType={session?.view_type}
			presenterType={session?.presenter_type}
		/>
	);
}

export default Home;
