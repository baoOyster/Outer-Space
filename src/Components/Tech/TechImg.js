export function TechImg({tech}){
    return (<>
        <img src={tech.imgPortrait} alt={tech.name} className="techPortraitImage"/>
        <img src={tech.imgLandscape} alt={tech.name} className="techLandscapeImage"/>
    </>);
}