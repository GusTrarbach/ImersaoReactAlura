import styled from "styled-components"
import Banner from "./components/Banner";

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;


export default function Header({ config }) {
    return (
        <>
            <Banner bgImage={config.bgImage} />
            <StyledHeader>
                <section className="user-info">
                    <img src={`https://github.com/${config.github}.png`} />
                    <div>
                        <h2>{config.name}</h2>
                        <p>{config.job}</p>
                    </div>
                </section>
            </StyledHeader>
        </>
    );
}