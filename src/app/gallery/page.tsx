import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, home, person, routes } from "@/resources";
import { toAbsoluteUrl } from "@/utils/absoluteUrl";
import { Flex, Meta, Schema } from "@once-ui-system/core";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    path: gallery.path,
  });
}

export default function Gallery() {
  if (!routes["/gallery"]) {
    notFound();
  }

  const ogPath = gallery.images[0]?.src ?? home.image;
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={toAbsoluteUrl(baseURL, ogPath)}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
