import { Container } from "./headerSection.style";
import validate from "../../../common_check/checkTitleContentImage";

function HeaderSection({data}) {
    const ok = validate(data);
    if (!ok) {
        return <></>;
    }
    return (
        <Container>
            <div>
                <h1>{data.title}</h1>
            </div>
        </Container>
    );
}

export default HeaderSection;