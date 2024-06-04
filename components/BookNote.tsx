import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookNote = (props) => {
  const { book } = props;
  return (
    <div className="max-w-7xl mx-auto mt-32 mb-20 px-8">
      <div
        className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 ")}
      >
        <Link className="book-wrapper" href="book slug">
          <div className="book-items">
            <div className="main-book-wrap">
              <div className="book-cover">
                <div className="book-inside"></div>
                <div className="book-image">
                  <Image
                    src={book.image}
                    alt="image2"
                    width={500}
                    className="w-72 h-96"
                    height={800}
                  />
                  <div className="effect"></div>
                  <div className="light"></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookNote;
