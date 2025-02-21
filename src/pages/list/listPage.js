import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import FetchEntry from "../../api/fetchEntry";
import NewsSection from "../../components/news/newsSection/newsSection";

function ListPage() {
    const { listId } = useParams();
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        FetchEntry(listId).then(data => setNewData(data));
    }, [listId]);

    if (!newData) {
        return <> </>;
    }

    return (
        <Container>
            <NewsSection data={newData}></NewsSection>
        </Container>
    );
}
export default ListPage;