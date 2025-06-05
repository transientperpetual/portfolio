import Link from 'next/link'
import clsx from 'clsx'
import slugify from 'slugify'
import { Text } from '@/components/RenderNotion'
import { GoBook } from 'react-icons/go'

export function ArticleCard({ article }) {

  const articleTitle = article.properties?.Name.title[0]?.plain_text
  const publishedDate = new Date(article.created_time).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
  const articleDescription = article.properties.Description?.rich_text
  const slug = slugify(articleTitle, { strict: true, lower: true })
  const wordCount = article.properties.wordCount.number
  const readingTime = Math.ceil(wordCount === null ? 0 : wordCount / 180)
  const coverImgFn = () => {
    if (article.cover) {
      const imgType = article.cover.type
      const image =
        imgType === 'external'
          ? article.cover.external.url
          : article.cover.file.url
      return image
    } else {
      return false
    }
  }

  const ArticleWrapper =  Link
  const linkProps = { href: '/archive/' + slug }
  return (
    <div
      className={clsx(
        `break-inside group relative h-auto max-w-full border-b border-gray-200 p-2 transition-all dark:border-gray-800`
      )}
      key={slug}
    >
      <ArticleWrapper
        {...linkProps}
        className={`${ 'cursor-pointer'}`}
      >

        {/* Article Title */}
          <div
            className={`text-lg font-bold text-zinc-800 no-underline dark:text-zinc-200 group-hover:underline`}
          >
            {articleTitle}
          </div>

        {/* Article Description */}
        <p className="mt-0 block max-w-full text-sm text-gray-500 dark:text-gray-400">
          <Text text={articleDescription} />
        </p>

        {/* Publish Date & Reading time */}
          <div className="mt-0 mb-0 flex items-center space-x-10">
            <span className="flex text-[12px] items-center text-zinc-400 dark:text-zinc-500">
            {publishedDate}
            </span>
            <span className=" flex items-center text-[12px] text-zinc-400 dark:text-zinc-500">
              <GoBook className="mr-2 h-[0.9rem] w-[0.9rem]" />
              {readingTime} min
            </span>
          </div>
      </ArticleWrapper>
    </div>
  )
}
