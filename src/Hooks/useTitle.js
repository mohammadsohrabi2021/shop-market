
import { useEffect } from 'react';

const useTitle = ( title ) => {
    console.log(title);
    return (
        useEffect(() => {
            document.title = title
        }, [title])
    );
}

export default useTitle;