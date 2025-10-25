export default function ViewProfile({ profile }) {
    return (
        <div className="profile">
            <h2 style = {{display:'inline-flex'}}>{profile.title}</h2>
            <img src = "./icons/share.png" width = "30" height = "30" style = {{cursor:'pointer', imageRendering:'crisp-edges', position:'relative', right:'-70%'}}></img>
            <p>{profile.content}</p>
        </div>
    );
}