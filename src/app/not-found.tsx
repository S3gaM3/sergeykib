import { Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Страница не&nbsp;найдена
      </Heading>
      <Text onBackground="neutral-weak">Такого адреса на&nbsp;сайте нет или раздел отключён.</Text>
    </Column>
  );
}
