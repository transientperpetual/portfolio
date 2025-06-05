import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import slugify from 'slugify'
import { Text } from '@/components/RenderNotion'
import { AiOutlineEye } from 'react-icons/ai'
import { GoBook } from 'react-icons/go'

export function BlogCard({ article }) {

  const articleTitle = article.properties?.Name.title[0]?.plain_text
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

  const coverImg = coverImgFn()

  const [isLoading, setLoading] = useState(true)

  const ArticleWrapper =  Link
  const linkProps = { href: '/archive/' + slug }
  return (
    <div
      className={clsx(
        `break-inside group relative h-auto max-w-full rounded-lg border border-gray-200 p-4 transition-all hover:shadow dark:border-gray-700`
      )}
      key={slug}
    >
     
      <ArticleWrapper
        {...linkProps}
        className={`${ 'cursor-pointer'}`}
      >
        {!!coverImg && (
          <div className="aspect-w-16 aspect-h-9 h-64 w-full overflow-hidden rounded-md">
            <Image
              unoptimized
              src={coverImg}
              alt={'Cover Image for ' + articleTitle}
              className={clsx(
                `h-full w-full rounded-md object-cover duration-1000 ease-in-out`,
                isLoading ? 'blur-md' : 'blur-0'
              )}
              height="300"
              width="500"
              onLoad={() => setLoading(false)}
              placeholder="blur"
              blurDataURL={coverImg}
            />
          </div>
        )}
        <h3 className="mt-4 text-lg">
          <div
            className={`font-heading tracking-wider text-zinc-900 no-underline dark:text-zinc-100 group-hover:underline`}
          >
            {articleTitle}
          </div>
        </h3>
        <p className="mt-4 block max-w-full text-base text-gray-500 dark:text-gray-400">
          <Text text={articleDescription} />
        </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="flex items-center font-poppins text-xs tracking-wide text-zinc-900 dark:text-zinc-100">
              <AiOutlineEye className="mr-2 h-4 w-4" />
              {/* <CountUp end={views} duration={3} /> */}
            </span>
            <span className="flex items-center font-poppins text-xs text-zinc-900 dark:text-zinc-100">
              <GoBook className="mr-2 h-[0.9rem] w-[0.9rem]" />
              {readingTime} min read
            </span>
          </div>
      </ArticleWrapper>
    </div>
  )
}
