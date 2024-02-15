
import {getSortedPostsData } from "@/lib/content"; 
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
    const allPostsData = getSortedPostsData();
  return (
    <>
      <h1>General Insights</h1>
      <section className="insights">
      {!allPostsData.length && <p>No articles found</p>}

        {allPostsData.map(({ id, title, shortTitle, excerpt, image, imageAlt }) => (
          <article key={id} className="insight">
            <Link href={`/insights/insight/${id}`}>
              <h2>{shortTitle}</h2>
            </Link>
            <div className="insight__content">
            { image && (
                <div className="image__container--small">
        <Image src={`/images/${image}`} alt={imageAlt} width={800} height={150} />
                </div>
        )}
        <div className="excerpt">
            {excerpt}
        </div>
            </div>
          </article>
        ))}
      </section>
    </>    
  );
}