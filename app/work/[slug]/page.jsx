// app/work/[slug]/page.js
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
  const slug = params.slug;
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

  console.log("PROJECT TITLE : ", projectTitle)

    console.log("PROJECTS : ", blocks)
  return (
    <div>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/work"
              aria-label="Go back to work"
              className="group mb-8 hidden h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 md:flex lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              {/* <BsArrowLeft className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300" /> */}
              back
            </Link>
            <article>
              <header className="flex flex-col">
                <h1 className="mb-4 font-heading text-4xl tracking-wide text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  <Text text={projectTitle} />
                </h1>
                <div className="mb-6 flex items-center font-poppins">
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
              <div className="my-8 text-center text-sm italic text-zinc-400 dark:text-zinc-500 md:my-12">
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
     
    </div>
  );
}