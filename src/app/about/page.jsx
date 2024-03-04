"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              blah balh bla i am who i am and dat
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              quote
            </span>
            {/* BIOGRAPHY SIGNATURE SVG */}
            <div className="self-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="188" viewBox="0 0 266 188" fill="none">
                <path d="M108.312 59.7817C110.867 59.7817 112.697 58.0359 112.697 55.4168C112.697 50.9683 106.628 51.9477 103.724 52.4731C97.0159 53.687 87.8375 57.8934 84.2547 63.9842C79.6358 71.8364 92.8243 76.2673 98.1614 78.4594C104.464 81.048 110.438 83.9843 115.276 88.8945C117.197 90.8443 119.806 93.4258 119.844 96.4061C119.91 101.741 113.823 105.893 109.327 107.288C101.182 109.816 93.1514 108.664 85.2901 105.704C78.8525 103.28 78.9864 98.3121 82.0012 93.036" stroke="black" stroke-width="3" stroke-linecap="round" />
                <path d="M128.411 105.461C131.712 100.234 140.657 104.671 136.207 109.196C133.993 111.448 132.511 112.054 129.71 110.374C127.948 109.316 128.115 107.411 129.873 106.557C130.697 106.157 133.336 105.709 132.228 107.45C131.383 108.778 128.49 108.319 129.467 107.572C130.222 106.995 131.82 106.281 132.553 107.288C133.194 108.17 131.375 108.806 131.375 108.547C131.375 107.284 132.952 107.827 133.527 108.019" stroke="black" stroke-width="3" stroke-linecap="round" />
                <path d="M168.609 62.3397C170.286 65.3212 180.126 57.1645 172.263 56.8786C166.481 56.6683 158.551 58.181 154.215 62.421C150.029 66.5139 151.125 72.1438 155.169 75.8607C161.396 81.5851 169.66 84.7944 175.917 90.5592C179.744 94.0851 187.405 100.261 184.424 106.354C181.735 111.847 174.133 112.869 168.812 111.592C162.192 110.003 158.487 103.734 157.646 97.4212" stroke="black" stroke-width="3" stroke-linecap="round" />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 6V14" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
            </div>
            {/* SKILL SCROLL SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 6V14" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM 1 */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior Software ENgineer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">my current employment way better than the prevopus before!</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/* JOB COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2 */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">Senior Software ENgineer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">my current employment way better than the prevopus before!</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/* JOB COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 3 */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior Software ENgineer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">my current employment way better than the prevopus before!</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/* JOB COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/2">

        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
