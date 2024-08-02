export type LoadingContextType = {
    loading: boolean;
    // setLoading: () => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    // setLoading: (loading: boolean) => void;
}