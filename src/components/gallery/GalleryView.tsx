"use client";

import { gallery } from "@/resources";
import { MasonryGrid, Media } from "@once-ui-system/core";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Media
          enlarge
          priority={index === 0}
          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 640px"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
