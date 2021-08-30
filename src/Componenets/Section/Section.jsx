import { SectionContainer } from "./SectionStyled";

const Section = ({ title, children }) => {
    return (
        <SectionContainer>
            <h1 className="title">{title}</h1>
            {children}
        </SectionContainer>
    );
}

export default Section;