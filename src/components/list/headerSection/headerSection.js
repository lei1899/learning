import { Container } from "./headerSection.style";
import imageUrl from "../../../constantVariables";
import getNestedObjectValue from "../../../common_check/getValue";
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
            {/* <img alt="" src={getNestedObjectValue(data, imageUrl)} /> */}
        </Container>
    );
}

export default HeaderSection;