"use client";

import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiSpringboot,
  SiAngular,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import {
  CssIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
} from "@/components/icons";
export default function SkillsDisplay() {
  return (
    <div
      id="icons"
      className="grid grid-cols-2 items-center md:grid-cols-3 gap-8 mt-4"
    >
      <div className="flex flex-col items-center">
        <ReactIcon />
        <p className="text-2xl font-thin text-white">React</p>
      </div>
      <div className="flex flex-col items-center">
        <HtmlIcon />
        <p className="text-2xl font-thin text-white">HTML</p>
      </div>
      <div className="flex flex-col items-center">
        <CssIcon />
        <p className="text-2xl font-thin text-white">CSS</p>
      </div>
      <div className="flex flex-col items-center">
        <GitHubIcon />
        <p className="text-2xl font-thin text-white">GitHub</p>
      </div>
      <div className="flex flex-col items-center">
        <GitIcon />
        <p className="text-2xl font-thin text-white">Git</p>
      </div>
      <div className="flex flex-col items-center">
        <JavascriptIcon />
        <p className="text-2xl font-thin text-white">JavaScript</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTypescript style={{ fill: "white" }} className="w-20 h-20 m-0 p-0" />
        <p className="text-2xl font-thin text-white">TypeScript</p>
      </div>
      <div className="flex flex-col items-center">
        <NodeIcon />
        <p className="text-2xl font-thin text-white">NodeJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss
          style={{ fill: "white" }}
          className="w-14 h-14 m-0 p-0"
        />
        <p className="text-2xl font-thin text-white">TailwindCSS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiNextdotjs style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">NextJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SassIcon />
        <p className="text-2xl font-thin text-white">SASS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiPostgresql style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">Postgrees</p>
      </div>
      <div className="flex flex-col items-center">
        <SiSqlite style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">SQLite</p>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">MongoDB</p>
      </div>
      <div className="flex flex-col items-center">
        <SiAngular style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">Angular</p>
      </div>
      <div className="flex flex-col items-center">
        <DiJava style={{ fill: "white" }} className="w-16 h-16 m-0 p-0" />
        <p className="text-2xl font-thin text-white">Java</p>
      </div>
      <div className="flex flex-col items-center">
        <SiSpringboot style={{ fill: "white" }} className="w-16 h-16 m-0 p-0" />
        <p className="text-2xl font-thin text-white">Spring Boot</p>
      </div>
    </div>
  );
}
