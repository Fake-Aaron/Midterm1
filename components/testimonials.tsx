'use client';

import * as React from 'react';
import { TestimonialHeader } from './testimonials/testimonialHeader';
import { TestimonialGrid } from './testimonials/testimonialGrid';

const LaunchUILink = () => (
  <span className="text-purple-400">@launchui</span>
);

export const testimonials = [
  {
    id: 1,
    avatar: '/avatar.png',
    name: 'Zara Qadir',
    username: '@zaraqadir',
    content: (
      <>
        Playing around with <LaunchUILink /> suddenly made me feel inspired
        to launch that side project.
      </>
    ),
  },
  {
    id: 2,
    avatar: '/avatar.png',
    name: 'Fabrizio Fernandez',
    username: '@fab3304',
    content: (
      <>
        Testing out <LaunchUILink />
        ’s responsive design. That’s the template we’ve all been waiting for.
        My mobile-first heart is doing a happy dance.
      </>
    ),
  },
  {
    id: 3,
    avatar: '/avatar.png',
    name: 'Felix Beaumont',
    username: '@felixbs',
    content: (
      <>
        Digging into <LaunchUILink />. Those shadows are giving me serious
        design envy.
      </>
    ),
  },
  {
    id: 4,
    avatar: '/avatar.png',
    name: 'Olivia Blackwood',
    username: '@olivia1992',
    content: (
      <>
        <LaunchUILink /> is not messing around with its component library game.
      </>
    ),
  },
  {
    id: 5,
    avatar: '/avatar.png',
    name: 'Esme Rothschild',
    username: '@EsmeRothArt',
    content: (
      <>
        <LaunchUILink /> is siiiiick. That globe graphic though. Making me
        feel like I’m building websites for a sci-fi movie.
      </>
    ),
  },
  {
    id: 6,
    avatar: '/avatar.png',
    name: 'Darius Flynn',
    username: '@flynnn',
    content: (
      <>
        Exploring <LaunchUILink />
        ’s sleek UI. It’s like a dark mode enthusiast’s playground.
      </>
    ),
  },
  {
    id: 7,
    avatar: '/avatar.png',
    name: 'Kai Nakamura',
    username: '@KaiNakWaves',
    content: (
      <>
        Just made my first website with <LaunchUILink />. Its flexibility is
        speaking my language. No drama, just seamless integration.
      </>
    ),
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col px-8 py-20 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <TestimonialHeader
        title="Loved by designers and developers across the planet"
        subtitle="Here's what people are saying about Launch UI"
      />
      <TestimonialGrid testimonials={testimonials} />
    </section>
  );
};

