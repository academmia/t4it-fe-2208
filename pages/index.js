import Layout from "../components/core/layout/Layout";
import { API_URL } from "@/config/index"
import ProjectItem from "@/components/projects/ProjectItem";
import Link from "next/link";

export default function HomePage({ projects }) {
  return (
    <Layout>
      <h1>Latest Projects</h1>
      { projects.length === 0 && <h3>No projects...</h3> }
      { projects.map( p => (
        <ProjectItem key={p.id} project={p}/>
      ) ) }
      {
        projects.length > 0 && (
          <Link href="/projects">
            <a className="btn-secondary">More projects...</a>
          </Link>
        )
      }
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects: projects.slice(0, 3)
    },
    revalidate: 1
  }
}