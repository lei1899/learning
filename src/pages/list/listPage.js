import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import FetchEntry from "../../api/fetchEntry";
import ListSection from "../../components/list/listSection";

function ListPage() {
    const { id } = useParams();
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        FetchEntry(id).then(data => setNewData(data));
    }, [id]);

    if (!newData) {
        return <> </>;
    }

    return (
        <Container>
            <ListSection data={newData}></ListSection>
        </Container>
    );
}
export default ListPage;