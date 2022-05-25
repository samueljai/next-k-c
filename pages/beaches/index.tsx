import React, { useEffect } from 'react';
import { useRootStore } from '../../providers/RootStoreProvider';
import { fetchBeaches } from '../../services/beachService';
import Loading from '../../components/Common/Loading/Loading';
import Beaches from '../../components/Beaches/Beaches';

function index() {
    const {
        beachStore: { beachList, hydrate },
    } = useRootStore();

    useEffect(() => {
        const data = fetchBeaches(true);

        hydrate(data);
    }, []);

    if (!beachList) return <Loading />;

    return <Beaches />;
}

export default index;
