import styled from "styled-components"

const StyledBanner = styled.div`
    width: 100%; 
    height: 230px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
`;


export default function Banner({ bgImage }) {
    console.log({ bgImage })
    return (
        < StyledBanner bgImage={bgImage} >
            <>
            </>
        </StyledBanner >
    );
}