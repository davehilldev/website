import { getHomePosts } from "@/lib/content";
import Link from 'next/link';

export default function Home() {
  const posts = getHomePosts();
  return (
    <>
     <h1>Home</h1>
      <p>For 23 years now, I've poured my heart and soul into web development. From HTML and CSS to JavaScript, I wield these tools like an artist, crafting user-centric interfaces that connect with people on a deeper level. My dedication shows in seamless technology that blends seamlessly into the user experience, feeling more like an extension of themselves than just a website. <Link href="/about/">Read more <span>&#8594;</span> </Link></p>
     <div className="hero full-bleed">
    <p>Image by <a href="https://pixabay.com/users/12019-12019/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1758197" target="_blank" rel="noopener">12019</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1758197" target="_blank" rel="noopener">Pixabay</a></p>
   </div>
   <section className="insights">
   {posts.map((post) => (
        <div key={post.slug} className="insight">
          <Link href={`/posts/${post.slug}`}>
          
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            
          </Link>
        </div>
      ))}
      </section>
      <section>
      <h2>Heading 2</h2>
      <p>Quae ex assumenda minus, in, tempora cumque perspiciatis, iure quasi necessitatibus qui iusto odit tenetur magni omnis repudiandae maiores. Pariatur porro vitae nesciunt non tempore? Amet necessitatibus veniam fugit ratione.</p>
      <p>Totam odit eligendi quis quasi fuga, minus consectetur, reprehenderit rem nemo dignissimos earum voluptatum quas hic accusantium ipsam illum velit porro molestias fugit cupiditate error cum id? Autem, unde deleniti.</p>
      </section>
    </>
  );
}
