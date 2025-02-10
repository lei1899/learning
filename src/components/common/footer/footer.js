

import { Link } from "react-router-dom";
import { Container } from "./footer.style";
import {FOOTER_COPYRIGHT} from "../../../constantVariables";

function Footer() {
    return (
        <Container>
            <p>{FOOTER_COPYRIGHT}</p>
            <div>
                <Link>Interest Based Advertising</Link>
                <Link>Privacy Policy</Link>
                <Link>CCPA Notice</Link>
                <Link>Accessibility Policy</Link>
                <Link>Code of Conduct</Link>
            </div>

        </Container>
    );
}

export default Footer;
