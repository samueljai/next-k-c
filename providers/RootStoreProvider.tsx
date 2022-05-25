import {
    createContext,
    useContext,
    FC,
    ReactNode,
    ReactElement,
    ComponentType,
} from 'react';
import RootStore, { RootStoreHydrationType } from '../stores/RootStore';

let rootStore: RootStore;

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export type RootStoreComponentType = FC<{
    hydrationData?: RootStoreHydrationType;
    children: ReactNode;
}>;

export const RootStoreProvider: RootStoreComponentType = ({
    children,
    hydrationData,
}): ReactElement => {
    const rootStore = initializeStore(hydrationData);

    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

const initializeStore = (initialData?: RootStoreHydrationType): RootStore => {
    const _rootStore = rootStore ?? new RootStore();

    if (initialData) {
        _rootStore.hydrate(initialData);
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _rootStore;
    // Create the store once in the client
    if (!rootStore) rootStore = _rootStore;

    return _rootStore;
};

export const useRootStore = () => useContext(RootStoreContext);

type TWithRootStoreHOC = <P extends unknown>(
    Component: ComponentType<P>
) => (props: P) => JSX.Element;

export const withRootStore: TWithRootStoreHOC =
    (WrappedComponent) => (props) => {
        return <WrappedComponent {...props} rootStore={useRootStore()} />;
    };
