// app/blog/page.js
import { getDatabase } from '../../lib/notion';

export default async function BlogPage() {
  const databaseId = process.env.NOTION_PROJECTS_DB_ID;
  const projects = await getDatabase(databaseId);
    console.log("PROJECTS : ", projects)
  return (
    <div>
      <h1>Blog Articles</h1>
      {projects.map(
            (project, index) =>
              (
                // <Project key={index} project={project} index={index} />
                <h2  key={index} >{project.properties?.Name.title[0]?.plain_text}</h2>
              )
          )}
    </div>
  );
}