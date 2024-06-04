import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import BookNote from "@/components/BookNote";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import getAllBookNotes from "@/components/getAllBookNotes";

export default async function Home() {
  const allPosts = await getPostMetadata();
  const allBookNotes = await getAllBookNotes();
  return (
    <main className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <div className="my-20">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">recent writing</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
            {allPosts.map((post, idx) => {
              return <PostPreview key={idx} post={post} />;
            })}
          </div>
        </div>

        <div className="my-20">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">recent reading</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
            {allBookNotes.map((book, idx) => {
              return <BookNote key={idx} book={book} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
