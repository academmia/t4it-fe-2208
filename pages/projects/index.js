import Layout from "@/components/core/layout/Layout";
import { API_URL } from "@/config/index"
import ProjectItem from "@/components/projects/ProjectItem";

export default function ProjectsPage({ projects }) {
  return (
    <Layout>
      <h1>Projects</h1>
      { projects.length === 0 && <h3>No projects...</h3> }
      { projects.map( p => (
        <ProjectItem key={p.id} project={p}/>
      ) ) }
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects
    },
    revalidate: 1
  }
}