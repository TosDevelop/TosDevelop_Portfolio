import html5 from '@/assets/technologies/html5.svg';
import redis from '@/assets/technologies/redis.svg';
import githubactions from '@/assets/technologies/githubactions.svg';
import telegram from '@/assets/technologies/telegram.svg';
import nuxtjs from '@/assets/technologies/nuxtjs.svg';
import sass from '@/assets/technologies/sass.svg';
import flask from '@/assets/technologies/flask.svg';
import django from '@/assets/technologies/django.svg';
import sqlite from '@/assets/technologies/sqlite.svg';
import powerbi from '@/assets/technologies/powerbi.svg';
import jira from '@/assets/technologies/jira.svg';
import trello from '@/assets/technologies/trello.svg';
import cloudflare from '@/assets/technologies/cloudflare.svg';
import netlify from '@/assets/technologies/netlify.svg';
import vercel from '@/assets/technologies/vercel.svg';
import amazonec2 from '@/assets/technologies/amazonec2.svg';
import css3 from '@/assets/technologies/css3.svg';
import firebase from '@/assets/technologies/firebase.svg';
import express from '@/assets/technologies/express.svg';
import git from '@/assets/technologies/git.svg';
import bootstrap from '@/assets/technologies/bootstrap.svg';
import openai from '@/assets/technologies/openai.svg';
import claude from '@/assets/technologies/claude.svg';
import gemini from '@/assets/technologies/gemini.svg';
import react from '@/assets/technologies/react.svg';
import nextjs from '@/assets/technologies/nextjs.svg';
import typescript from '@/assets/technologies/typescript.svg';
import javascript from '@/assets/technologies/javascript.svg';
import materialui from '@/assets/technologies/materialui.svg';
import framermotion from '@/assets/technologies/framermotion.svg';
import vuejs from '@/assets/technologies/vuejs.svg';
import laravel from '@/assets/technologies/laravel.svg';
import php from '@/assets/technologies/php.svg';
import python from '@/assets/technologies/python.svg';
import nodejs from '@/assets/technologies/nodejs.svg';
import mysql from '@/assets/technologies/mysql.svg';
import sql from '@/assets/technologies/sql.svg';
import postgresql from '@/assets/technologies/postgresql.svg';
import microsoftsqlserver from '@/assets/technologies/microsoftsqlserver.svg';
import figma from '@/assets/technologies/figma.svg';
import github from '@/assets/technologies/github.svg';
import postman from '@/assets/technologies/postman.svg';
import playwright from '@/assets/technologies/playwright.svg';
import jenkins from '@/assets/technologies/jenkins.svg';
import amazonwebservices from '@/assets/technologies/amazonwebservices.svg';
import docker from '@/assets/technologies/docker.svg';
import kubernetes from '@/assets/technologies/kubernetes.svg';
import linux from '@/assets/technologies/linux.svg';
import tailwindcss from '@/assets/technologies/tailwindcss.svg';

export const TECHNOLOGY_LOGOS: Record<string, string> = {
  redis,
  'github actions': githubactions,
  telegram,
  'telegram bot api': telegram,
  nuxt: nuxtjs,
  'nuxt.js': nuxtjs,
  sass,
  scss: sass,
  flask,
  django,
  sqlite,
  'power bi': powerbi,
  jira,
  trello,
  cloudflare,
  netlify,
  vercel,
  'aws ec2': amazonec2,
  html: html5,
  html5,
  css: css3,
  css3,
  firebase,
  express,
  'express.js': express,
  git,
  bootstrap,
  'bootstrap 5': bootstrap,
  chatgpt: openai,
  claude,
  gemini,
  react,
  vue: vuejs,
  nodejs,
  tailwind: tailwindcss,
  'react.js': react,
  'next.js': nextjs,
  typescript: typescript,
  javascript: javascript,
  'material ui': materialui,
  'framer motion': framermotion,
  'vue.js': vuejs,
  laravel: laravel,
  php: php,
  python: python,
  'node.js': nodejs,
  mysql: mysql,
  sql,
  postgresql: postgresql,
  'sql server': microsoftsqlserver,
  figma: figma,
  github: github,
  postman: postman,
  playwright,
  jenkins,
  aws: amazonwebservices,
  docker: docker,
  kubernetes: kubernetes,
  linux: linux,
  'tailwind css': tailwindcss,
};

export function getTechnologyLogoKey(name: string): string {
  const key = name.trim().toLowerCase();
  if (TECHNOLOGY_LOGOS[key]) return key;
  // Keep version numbers in labels while using the underlying technology logo.
  return key.replace(/\s+v?\d+(?:\.\d+)*$/i, '');
}
