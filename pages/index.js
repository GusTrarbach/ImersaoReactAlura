import config from "../config.json"
import Menu from "../src/components/Menu/Index";
import { StyledTimeline } from "../src/components/Timeline";
import React from "react";
import Favorites from "../src/components/Favoritos";
import Header from "../src/components/Header/Header";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header config={config} />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage

function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(config.playlists);
    //Statement
    //Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();

                                    return titleNormalized.includes(searchValueNormalized);
                                })
                                .map((video) => {
                                    return (
                                        <a href={video.url} key={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}