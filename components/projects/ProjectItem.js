import Link from "next/link";
import Image from "next/image";

import styles from './ProjectItem.module.scss'

const ProjectItem = ({ project }) => {
  return (
    <div className={styles.project}>
        <div className={styles.img}>
            <Image src={ !project.image ? project.image : '/images/project-default.jpg' } width={170} height={100}/>
        </div>
        <div className={styles.info}>
          <span>{project.date} / {project.time}</span>
          <h3>{project.name}</h3>
        </div>
        <div className={styles.link}>
          <Link href={`/projects/${project.slug}`}>
            <a className='btn'>Details</a>
          </Link>
        </div>
    </div>
  )
}
export default ProjectItem