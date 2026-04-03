"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  images = [],
  title,
  description,
  avatars,
  link,
}) => {
  const gallery =
    images.length === 1 ? (
      <Link href={href} className={styles.cardImageLink} aria-label={`Открыть проект: ${title}`}>
        <Media
          priority={priority}
          src={images[0]}
          alt={title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 960px"
          aspectRatio="original"
          objectFit="contain"
          radius="l"
          border="neutral-alpha-weak"
          overflow="hidden"
          fillWidth
        />
      </Link>
    ) : (
      <Carousel
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
    );

  return (
    <Column fillWidth gap="m" className={styles.card}>
      {gallery}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
        className={styles.contentRow}
      >
        {title && (
          <Flex flex={5} className={styles.titleWrap}>
            <SmartLink href={href} style={{ width: "fit-content", maxWidth: "100%" }}>
              <Heading as="h2" wrap="balance" variant="heading-strong-xl" className={styles.title}>
                {title}
              </Heading>
            </SmartLink>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || link) && (
          <Column flex={7} gap="16" className={styles.details}>
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
                className={styles.description}
              >
                {description}
              </Text>
            )}
            {link && (
              <Flex gap="24" wrap className={styles.actions}>
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">Перейти на сайт</Text>
                </SmartLink>
              </Flex>
            )}
          </Column>
        )}
      </Flex>
    </Column>
  );
};
