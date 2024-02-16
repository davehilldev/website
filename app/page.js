import HomeCards from "@/components/HomeCards";
import { getHomePosts } from "@/lib/content";
import Link from 'next/link';

export default function Home() {
  const posts = getHomePosts();
  return (
    <>
    <section>
     <h1>Hey, I'm Dave</h1>
      <p>For 23 years now, I've poured my heart and soul into web development. From HTML and CSS to JavaScript, I wield these tools like an artist, crafting user-centric interfaces that connect with people on a deeper level. My dedication shows in seamless technology that blends seamlessly into the user experience, feeling more like an extension of themselves than just a website. <Link href="/about/">Read more <span>&#8594;</span> </Link></p>
      </section>
      <div className="hero full-bleed">
    <p>Image by <a href="https://pixabay.com/users/12019-12019/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1758197" target="_blank" rel="noopener">12019</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1758197" target="_blank" rel="noopener">Pixabay</a></p>
   </div>
   <section className="insights">
      <h2>Latest Insight</h2>
   {posts.map((post) => (
        <div key={post.id} className="insight">
          <Link href={`/insights/insight/${post.id}`} >
          
              <h2>{post.shortTitle}</h2>
              </Link>
              <p>{post.excerpt}</p>
            
          
        </div>
      ))}
      </section>
      <h2>Unlocking Success: </h2>
      <HomeCards />
      <section>
      <h3>The 3 Essential Elements of Effective Web Design</h3>
      <p>Exploring the building blocks of a thriving website: accessibility, ensuring everyone can navigate it seamlessly; performance, keeping it lightning-fast for an enjoyable experience; and user experience, crafting an intuitive and engaging journey that keeps visitors coming back.</p>
      </section>
    </>
  );
}
