"use client";

import { useState } from "react";
import { Button, Column, Heading, Input, Row, Text, Textarea } from "@once-ui-system/core";

type FormState = "idle" | "loading" | "success" | "error";

export default function LeadCta() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setError("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_TELEGRAM_API_URL ||
        "https://sergeykib-telegram-api.vercel.app/api/telegram-simple";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Не удалось отправить форму");
      }

      setState("success");
      setName("");
      setContact("");
      setMessage("");
      setTimeout(() => setState("idle"), 2500);
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      setTimeout(() => {
        setState("idle");
        setError("");
      }, 3500);
    }
  };

  return (
    <Column
      id="contacts"
      fillWidth
      maxWidth="m"
      padding="xl"
      radius="l"
      gap="m"
      background="surface"
      border="neutral-alpha-weak"
      marginTop="xl"
      marginBottom="l"
    >
      <Heading as="h2" variant="display-strong-s">
        Готовы начать проект?
      </Heading>
      <Text onBackground="neutral-weak">
        Напишите задачу в форме ниже. Отвечу в ближайшее время и предложу оптимальный план.
      </Text>

      <form onSubmit={onSubmit}>
        <Column gap="12" fillWidth>
          <Input
            id="lead-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Имя"
            required
          />
          <Input
            id="lead-contact"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="Контакт (email / Telegram)"
            required
          />
          <Textarea
            id="lead-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Коротко о задаче"
            rows={5}
            required
          />
          <Row gap="12" vertical="center">
            <Button type="submit" disabled={state === "loading"}>
              {state === "loading" ? "Отправка..." : "Отправить"}
            </Button>
            {state === "success" && (
              <Text onBackground="success-medium">Сообщение отправлено</Text>
            )}
            {state === "error" && <Text onBackground="danger-medium">{error}</Text>}
          </Row>
        </Column>
      </form>
    </Column>
  );
}
