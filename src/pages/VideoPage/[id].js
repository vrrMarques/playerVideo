import { useRouter } from "next/router"
import PlayerVideo from "@/components/PlayerVideo"
import ComentSection from "@/components/ComentSection"
export default function VideoPage(){
    const {query} = useRouter()
    const videoID = query?.id

    return(
        <div>
            <PlayerVideo videoId={videoID}/>
            <ComentSection/>
        </div>
    )
}