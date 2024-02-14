
import { getPostData } from '@/lib/content';
import Comments from "@/components/Comments";
import Image from 'next/image'

export default async function Post({ params }) {
    const postData = await getPostData(params.id);

    return (
        <>
        <article className="article__container">
            <header className="article-header">
           <h1>{postData.title}</h1>
            { postData.image && (
                <div className="image__container">
        <Image src={`/images/${postData.image}`} alt={postData.imageAlt} width={800} height={150} />
                </div>
        )}
            </header>
        
            <article
                className="article__content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
         
                {/* <h2>Comments</h2>
               <Comments /> */}
            </article>
        </>
    );
}