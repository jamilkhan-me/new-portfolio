import BookNote from "@/components/BookNote";
import React from "react";
import getAllBookNotes from "@/components/getAllBookNotes";

export default async function BookNotes() {
  const allBookNotes = await getAllBookNotes();

  return (
    <main className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
          {allBookNotes.map((book, idx) => {
            return <BookNote key={idx} book={book} />;
          })}
        </div>
      </div>
    </main>
  );
}
