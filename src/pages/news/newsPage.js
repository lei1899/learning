import { useEffect, useState } from "react";
import { Container } from "./newsPage.style";
import FetchNewsEntry from "../../api/news";
import NewsSection from "../../components/news/newsSection/newsSection";

function NewsPage() {
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        document.title = "News Element Fleet Management";
        window.scrollTo(0, 0);
        FetchNewsEntry().then(data => setNewData(data));
    }, []);

    if (!newData) {
        return <> </>;
    }
    return (
        <Container>
            <NewsSection data={newData}></NewsSection>
        </Container>
    );
}
export default NewsPage;