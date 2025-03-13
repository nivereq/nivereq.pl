'use client'

const DISCORD_ID = '1305678814046588949';

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";

export function ProfilePhoto() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: DISCORD_ID,
		socket: true,
	});

	return <img className="avatar" src={!loading ? `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}` : `https://cdn.discordapp.com/embed/avatars/1.png`} />
}


export function SpotifyStatus() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: DISCORD_ID,
		socket: true,
	});

	if(!loading && status.listening_to_spotify){
		return (
			<div className="spotifyStatus anim-appearing">
				
				<a href={"https://open.spotify.com/track/" + status.spotify.track_id}><span><i className="bi bi-spotify" /></span><span className="artistName">{status.spotify.artist}</span> - <span className="songName">{status.spotify.song}</span></a>
			</div>
		)
	}
}

export function CustomStatus() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: DISCORD_ID,
		socket: true,
	});

	if(!loading && status.activities[0] && status.activities[0].id == "custom"){
		let statusString = "";
		let { emoji, state } = status.activities[0];
		if(!emoji.id){
			statusString += emoji.name;
		}else{
			
			return(
				<span className="customStatus anim-appearing">
					<img className="emote" src={"https://cdn.discordapp.com/emojis/" + emoji.id + `${emoji.animated ? ".gif" : ""}`} />
					<span className="statusText">{state}</span>
				</span>	
		)
		}
		statusString += state
		return (
			<span className="customStatus anim-appearing">
					<span className="statusText">{emoji.name}{state}</span>
			</span>	
		)
	}
}