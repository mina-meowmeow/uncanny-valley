import { Header } from '@/components/header';
import ProductListView from '../ProductsListView';
import LivestreamsListView from '../LivestreamsListView';

export default function ExperimentView({ viewType, presenterType }) {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			{viewType == 'product' ? <ProductListView /> : <LivestreamsListView />}
		</div>
	);
}
