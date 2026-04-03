"use client";

import NotFound from "@/app/not-found";
import { protectedRoutes, routes } from "@/resources";
import { nbsp } from "@/utils/typographyRu";
import { Button, Column, Flex, Heading, PasswordInput, Spinner } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [authApiUnavailable, setAuthApiUnavailable] = useState(false);

  const normalizePathname = (value: string | null): string => {
    if (!value) return "/";
    if (value === "/") return "/";
    return value.endsWith("/") ? value.slice(0, -1) : value;
  };

  const normalizedPathname = useMemo(() => normalizePathname(pathname), [pathname]);

  const isRouteEnabled = useMemo(() => {
    if (!normalizedPathname) return false;

    if (normalizedPathname in routes) {
      return routes[normalizedPathname as keyof typeof routes];
    }

    const dynamicRoutes = ["/blog", "/work"] as const;
    for (const route of dynamicRoutes) {
      if (normalizedPathname.startsWith(route) && routes[route]) {
        return true;
      }
    }

    return false;
  }, [normalizedPathname]);

  const isProtectedByConfig = useMemo(
    () => Boolean(protectedRoutes[normalizedPathname as keyof typeof protectedRoutes]),
    [normalizedPathname],
  );
  const [isPasswordRequired, setIsPasswordRequired] = useState(isProtectedByConfig);

  useEffect(() => {
    setIsPasswordRequired(isProtectedByConfig);
    setAuthApiUnavailable(false);
    setError(undefined);
  }, [isProtectedByConfig]);

  useEffect(() => {
    if (!isPasswordRequired) {
      return;
    }

    const checkAuth = async () => {
      setLoading(true);
      setIsAuthenticated(false);

      try {
        const response = await fetch("/api/check-auth");

        if (response.ok) {
          setIsAuthenticated(true);
        } else if (response.status === 404) {
          // Static export deployments do not support app/api routes.
          setAuthApiUnavailable(true);
          setIsPasswordRequired(false);
        }
      } catch {
        setAuthApiUnavailable(true);
        setIsPasswordRequired(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [isPasswordRequired]);

  const handlePasswordSubmit = async () => {
    if (authApiUnavailable) {
      setError(`Защита паролем недоступна при${nbsp}статическом развёртывании`);
      return;
    }

    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError(`Неверный${nbsp}пароль`);
    }
  };

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          Страница защищена{nbsp}паролем
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Войти</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
