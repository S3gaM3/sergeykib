import { nbsp as nb } from "@/utils/typographyRu";

const LOCALE = "ru-RU";

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  let normalized = date;
  if (!normalized.includes("T")) {
    normalized = `${normalized}T00:00:00`;
  }

  const targetDate = new Date(normalized);
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));

  let relativeRu = "";

  if (daysAgo >= 365) {
    const years = Math.floor(daysAgo / 365);
    relativeRu = `${years}${nb}г.${nb}назад`;
  } else if (daysAgo >= 30) {
    const months = Math.floor(daysAgo / 30);
    relativeRu = `${months}${nb}мес.${nb}назад`;
  } else if (daysAgo > 0) {
    relativeRu = `${daysAgo}${nb}дн.${nb}назад`;
  } else if (hoursAgo > 0) {
    relativeRu = `${hoursAgo}${nb}ч.${nb}назад`;
  } else if (minutesAgo > 0) {
    relativeRu = `${minutesAgo}${nb}мин.${nb}назад`;
  } else {
    relativeRu = "только что";
  }

  const fullDate = targetDate.toLocaleString(LOCALE, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${relativeRu})`;
}
