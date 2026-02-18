export default function Idea({nick, name, description}){
    return(
        <ul>
            <li>{name}</li>
            <li>{nick}</li>
            <li>{description}</li>
        </ul>
    )
}
