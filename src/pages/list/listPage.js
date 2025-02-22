import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import ListSection from "../../components/list/listSection";
import getEntriesByTag from "../../api/getEntriesByTag";

function ListPage() {
    const { id } = useParams();
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        getEntriesByTag(id).then(data => setNewData(data));
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