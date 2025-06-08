import { getDatabase, getBlocks } from '../../../lib/notion';
import slugify from 'slugify';
import Link from "next/link";
import { Container } from '../../../components/Container';
import { Prose } from '../../../components/Prose';
import { Text, renderBlock } from '../../../components/RenderNotion';
import { Fragment } from 'react'


export default async function Project({params}) {
  const databaseId = process.env.NOTION_PROJECTS_DB_ID;
  const database = await getDatabase(databaseId);
  const year = new Date().getFullYear();
  const slug = await params.slug;
  const project = database.find(
    (post) =>
      slugify(post.properties?.Name.title[0]?.plain_text, {
        strict: true,
        lower: true,
      }) === slug
  )

  const id = project.id
  const blocks = await getBlocks(id)

  const projectTitle = project.properties?.Name.title
  const projectDescription = project.properties.Description?.rich_text

  const coverImgFn = () => {
    if (project.cover) {
      const imgType = project.cover.type
      return imgType === 'external'
        ? project.cover.external.url
        : project.cover.file.url
    }
    return false
  }
  const coverImg = coverImgFn()

  return (
    <div>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/"
              aria-label="Go back to work"
              className="group mb-8 hidden h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition md:flex lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              {/* <BsArrowLeft className="w-4 h-4 transition text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#5d5d5d" d="M9.308 17.308L4 12l5.308-5.308l.708.708l-4.1 4.1H20v1H5.916l4.1 4.1z"/></svg>
            </Link>
            <article>
              <header className="flex flex-col">
                <h1 className="mb-4 text-4xl font-bold tracking-wide font-heading text-zinc-800 sm:text-5xl">
                  <Text text={projectTitle} />
                </h1>
                <div className="flex items-center mb-6 font-poppins">
                  <time
                    dateTime={new Date(
                      project.properties.Executed.date.start
                    ).toISOString()}
                    className="flex items-center text-sm text-zinc-400 dark:text-zinc-500 md:text-base"
                  >
                    {new Date(
                      project.properties.Executed.date.start
                    ).toLocaleDateString('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </time>
                </div>
              </header>
              <Prose className={coverImg ? 'mt-8' : 'mt-0'}>
                {blocks.map((block) => (
                  <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                ))}
              </Prose>
              <div className="my-8 text-sm italic text-center text-zinc-400 dark:text-zinc-500 md:my-12">
                This post was last updated on{' '}
                {new Date(project.last_edited_time).toLocaleDateString(
                  'en-US',
                  {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  }
                )}
              </div>
            </article>
          </div>
        </div>
      </Container>
      <footer className="text-center text-sm text-[#999] py-4">
        © {year} Ankit Jangid. All rights reserved.
      </footer>
     
    </div>
  );
}