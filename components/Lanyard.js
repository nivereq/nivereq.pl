'use client'

const DISCORD_ID = '1305678814046588949';

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";

export function ProfilePhoto() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: DISCORD_ID,
		socket: true,
	});

	return <img className="avatar" src={!loading ? `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 5)}.png`} />
}


export function SpotifyStatus() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: DISCORD_ID,
		socket: true,
	});

	if(!loading && status.listening_to_spotify){
		return (
			<div className="spotifyStatus anim-appearing">
				
				<a href={"https://open.spotify.com/track/" + status.spotify.track_id}><span><i className="bi bi-spotify" /></span><span className="artistName">{status.spotify.artist}</span> - <span class="songName">{status.spotify.song}</span></a>
			</div>
		)
	}
}