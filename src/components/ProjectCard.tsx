"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m" className={styles.card}>
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
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
            <Heading as="h2" wrap="balance" variant="heading-strong-xl" className={styles.title}>
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
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
            <Flex gap="24" wrap className={styles.actions}>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Подробнее</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">Открыть проект</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
