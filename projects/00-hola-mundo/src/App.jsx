import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App ( ) {

    const format = (userName) => `@${userName}`

    
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={format} isFollowing={true} userName="kikobeats" name="Kiko Beats"/>
            <TwitterFollowCard formatUserName={format} isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard formatUserName={format} isFollowing userName="vxnder" name="Vanderhart"/>
        </section>
    )
    } 