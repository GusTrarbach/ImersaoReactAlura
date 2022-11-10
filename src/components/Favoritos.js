import styled from "styled-components"

const StyledFavorites = styled.div`
    flex-direction: row;
    padding: 16px 32px;
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .favorites-info {
        display: flex;
        justify-content: flex-start;
        gap: 16px;
        align-items: center;
        width: 100%
}
`

export default function Favorites({ favorites }) {
    return (
        <StyledFavorites>
            <h2>AluraTubes Favoritos</h2>
            <section className="favorites-info">
                {favorites
                    .map((favorite) => {
                        return (
                            <a>
                                <img src={`https://github.com/${favorite.profilePic}.png`} />
                                <p>{favorite.tag}</p>
                            </a>
                        )
                    })}
            </section>
        </StyledFavorites>
    )
}