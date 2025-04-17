'use client'

const DISCORD_ID = '1305678814046588949';
import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import { useTranslations } from 'next-intl';

export function ProfilePhoto() {
    let inc = 0;
    const t = useTranslations('HomePage');
    const { loading, status /*, websocket */ } = useLanyard({
        userId: DISCORD_ID,
        socket: true,
    });
    if (status) {
        return (
            <>
                <Image onClick={
                    e => {
                        inc++;
                        if (inc == 7) { inc = 0; alert(t("eastereggs.1")); }

                    }
                } width={80} height={80} alt="nivereqs pfp" className="shadow-md avatar" src={!loading ? `https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status.discord_user.avatar}` : `https://cdn.discordapp.com/embed/avatars/1.png`}></Image>
            </>
        )
    }
}


export function SpotifyStatus() {
    const { loading, status /*, websocket */ } = useLanyard({
        userId: DISCORD_ID,
        socket: true,
    });


}

export function CustomStatus() {
    const { loading, status /*, websocket */ } = useLanyard({
        userId: DISCORD_ID,
        socket: true,
    });

    if (!loading && status && status.spotify && status.listening_to_spotify) {
        return (
            <div className="status spotifyStatus anim-appearing">

                <a href={"https://open.spotify.com/track/" + status.spotify.track_id}><span><i style={{ color: "#1ed760" }} className="bi bi-spotify" /></span><span className="artistName">{status.spotify.artist}</span> - <span className="songName">{status.spotify.song}</span></a>
            </div>
        )
    } else {
        if (!loading && status && status.activities[0] && status.activities[0].id == "custom") {
            let statusString = "";
            let { emoji, state } = status.activities[0];
            if (emoji) {
                if (!emoji.id) {
                    statusString += emoji.name;
                } else {

                    return (
                        <span className="status customStatus anim-appearing">
                            <Image width={18} height={18} alt="" className="emote" src={"https://cdn.discordapp.com/emojis/" + emoji.id + `${emoji.animated ? ".gif" : ""}`}></Image>
                            <span className="statusText">{state}</span>
                        </span>
                    )
                }
            }

            statusString += state
            return (
                <span className="customStatus anim-appearing">
                    <span className="statusText">{emoji ? emoji.name : ""}{state}</span>
                </span>
            )
        }
    }
}