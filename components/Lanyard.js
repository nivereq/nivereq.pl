const DISCORD_ID = '1305678814046588949';

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";

export function Lanyard() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: DISCORD_ID,
		socket: true,
	});

	return <img className="avatar" src={!loading ? `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}` : undefined} />
            
    
}