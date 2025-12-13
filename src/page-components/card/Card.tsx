import { Link } from "@tanstack/react-router";

interface CardProps {
    image: string;
    name: string;
    username: string;
    isOrg: boolean;
}

export function Card({ image, name, username, isOrg }: CardProps) {

    return (
        <article>
            <img src={image} width="72" height="72"></img>
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
            </div>
            {isOrg ? <img src={"/icons/organization.png"} width="32" height="32" alt="Organization Icon"></img> : null}
            <Link to={``}/>
        </article>
    )
}