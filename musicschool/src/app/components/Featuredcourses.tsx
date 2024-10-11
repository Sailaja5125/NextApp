"use client";
import React from "react";
import courseData from "../../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
// define datatypes
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function Featuredcourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-center text-teal-600 font-semibold tracking-wide text-2xl">
          Featured Courses
        </h2>
        <p className="text-3xl m-4 font-extrabold text-white tracking-tight leading-8 sm:text-4xl">
          Learn With The Best
        </p>
      </div>
      <div className="m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => {
            return (
              <div key={course.id} className="flex justify-center items-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src="/courses/image.png"
                    alt="jordans"
                    height="200"
                    width="400"
                    className="object-contain"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <Link href={`/courses/${course.slug}`}>Buy now</Link>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {course.price}
                    </span>
                  </button>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 text-center ">
        <Link
          href={"/pages"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
}

export default Featuredcourses;
