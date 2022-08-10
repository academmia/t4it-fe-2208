import { useRouter } from "next/router";
import Layout from "@/components/core/layout/Layout";

const ProjectPage = () => {
 
    const router = useRouter();

    // console.log(router);

    return (
        <Layout>
            <h1>Project</h1>
            <h3>{router.query.id}</h3>
        </Layout>
    )
};
export default ProjectPage;
