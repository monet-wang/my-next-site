import Head from 'next/head'
import React from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';
import parse from 'html-react-parser';

export default function Article({ article }) {
    return (
        <>
            <Head>
                <title>{article.slug}</title>
            </Head>
            <div>
                {parse(article.contentHtml)}
            </div>
        </>
    )
}

export function getStaticPaths() {
    // Get the paths we want to pre-render based on articles
    const articlesDirectory = path.join(process.cwd(), 'articles');
    const filenames = fs.readdirSync(articlesDirectory);
    const paths = filenames.map((filename) => {
        return {
            params: {
                slug: filename.replace(/\.md$/, '')
            }
        }
    })
    console.log('====paths', paths)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    console.log('+++++++params', params)
    const articlesDirectory = path.join(process.cwd(), 'articles');
	
    const filePath = path.join(articlesDirectory, params.slug + '.md' );
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        props: {
            article: {
                slug: params.slug,
                title: matterResult.data.title,
                // date: matterResult.data.date,
                contentHtml
            }
        }
    };
}
