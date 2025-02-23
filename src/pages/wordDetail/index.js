import { useParams } from "react-router-dom";
import { Container, TitleSection, ContentSection } from "./style";
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState, useRef } from 'react';
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import SentenceItem from "../../components/contents/sentenceItemComponent";

function WordDetailPage() {
    let { id } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        FetchEntry(id).then(data => setNewsDetailData(data));
    }, [id]);

    if (!newsDetailData) {
        return <></>;
    }

    const list = getNestedObjectValue(newsDetailData, 'list');

    const playAudio = (url) => {
        if (audioRef.current) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    };

    return (
        <Container>
            <audio ref={audioRef} style={{ display: 'none' }} />
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            <ContentSection>
                {list && list.map((item, index) => (
                    <SentenceItem
                        key={index}
                        item={item}
                        onPlay={playAudio}
                        />
                ))}
            </ContentSection>
            <Footer />
        </Container>
    );
}

export default WordDetailPage;