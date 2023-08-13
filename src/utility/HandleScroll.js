export default function HandleScroll() {

    function ReachEnd(listRef) {
        const startposition = listRef.current.scrollTop;
        const endposition = listRef.current.scrollHeight - listRef.current.clientHeight;
        if (endposition - startposition < 100) {
            return true;
        }
        return false
    }

    return {
        ReachEnd
    }
}