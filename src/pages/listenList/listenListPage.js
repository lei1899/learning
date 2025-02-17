import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import FetchNewsEntry from "../../api/news";
import NewsSection from "../../components/news/newsSection/newsSection";

function ListenListPage() {
    const { listId } = useParams();
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        FetchNewsEntry(listId).then(data => setNewData(data));
    }, [listId]);

    if (!newData) {
        return <> </>;
    }

    return (
        <Container>
            <NewsSection data={newData} detailRoute={'listenDetail'}></NewsSection>
        </Container>
    );
}
export default ListenListPage;