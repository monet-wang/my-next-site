import React from 'react';
import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import Layout from '@/components/layout';

const Home = ({ articles }) => {
	return (
		<Layout>
			<div className="max-w-3xl mx-auto my-8">
				<h1 className="text-3xl font-bold mb-4">Articles</h1>
				<ul>
					{articles.map((article) => (
						<li key={article.slug}>
							<Link className="text-blue-500 hover:underline" 
								href={`/articles/${article.slug}`}>
								{article.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const articlesDirectory = path.join(process.cwd(), 'articles');
	const filenames = fs.readdirSync(articlesDirectory);

	const articles = await Promise.all(
		filenames.map((filename) => {
			const filePath = path.join(articlesDirectory, filename);
			const fileContents = fs.readFileSync(filePath, 'utf8');
			const matterResult = matter(fileContents);

			return {
				slug: filename.replace(/\.md$/, ''),
				title: matterResult.data.title,
			};
		})
	);
	
	return {
		props: {
			articles,
		},
	};
}

export default Home;
