import {useParams} from "react-router-dom";
import {Container, TitleSection} from "./newsDetailPage.style";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import FetchNewsDetailEntry from "../../api/newsDetail";
import {useEffect, useState} from 'react';
import {RichtextContent} from "../../components/common/richtextContent/richtextContent.style";
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import imageUrl from "../../constantVariables";

function NewsDetailPage() {
    let {newsId} = useParams();

    const [newsDetailData, setNewsDetailData] = useState(null);

    useEffect(() => {
        FetchNewsDetailEntry(newsId).then(data => setNewsDetailData(data));
    }, [newsId]);

    if (!newsDetailData) {
        return <></>;
    }
    console.log("==detail=", newsDetailData);
    return (
        <Container>
            <TitleSection>
                <h1>{newsDetailData.title}</h1>
            </TitleSection>
            <div>
                <img alt="" width={400} src={getNestedObjectValue(newsDetailData, 'image.fields.file.url')}/>
            </div>
            <div>
                <audio src={getNestedObjectValue(newsDetailData, 'audio.fields.file.url')} controls></audio>
            </div>
            <RichtextContent>{documentToReactComponents(newsDetailData.keywords)}</RichtextContent>
            <Footer/>
        </Container>
    );

}

export default NewsDetailPage;
