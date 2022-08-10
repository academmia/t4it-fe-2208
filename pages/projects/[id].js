import { useRouter } from "next/router";

const ProjectPage = () => {
 
    const router = useRouter();

    console.log(router);

    return (
        <>
            <h1>Project</h1>
            <h3>{router.query.id}</h3>
        </>
    )
};
export default ProjectPage;
