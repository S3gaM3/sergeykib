import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person, routes, work } from "@/resources";
import { toAbsoluteUrl } from "@/utils/absoluteUrl";
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    path: work.path,
  });
}

export default function Work() {
  if (!routes["/work"]) {
    notFound();
  }

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={toAbsoluteUrl(baseURL, work.image ?? home.image)}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
