import React, { useEffect, useState } from 'react';
import Loading from '../../components/Common/Loading/Loading';
import Beaches from '../../components/Beaches/Beaches';
import { getBeachListData } from '../../data/beachData';

function index() {
    const [beachList, setBeachList] = useState(null);

    useEffect(() => {
        const { beachList } = getBeachListData(true);

        setBeachList(beachList);
    }, []);

    if (!beachList) return <Loading />;

    return <Beaches beachList={beachList} />;
}

export default index;
