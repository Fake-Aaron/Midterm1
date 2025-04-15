import * as React from "react";
import { TestimonialCard } from "./testimonialCard";

interface Testimonial {
  id: number;
  avatar: string;
  name: string;
  username: string;
  content: React.ReactNode;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({
  testimonials,
}) => {
  const midPoint = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, midPoint);
  const secondRow = testimonials.slice(midPoint);

  return (
    <section className="overflow-hidden mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 justify-center w-full max-md:max-w-full">
        {firstRow.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            avatar={testimonial.avatar}
            name={testimonial.name}
            username={testimonial.username}
            content={testimonial.content}
          />
        ))}
      </div>
      <div className="flex gap-6 justify-center mt-6 w-full max-md:max-w-full">
        {secondRow.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            avatar={testimonial.avatar}
            name={testimonial.name}
            username={testimonial.username}
            content={testimonial.content}
          />
        ))}
      </div>
    </section>
  );
};
