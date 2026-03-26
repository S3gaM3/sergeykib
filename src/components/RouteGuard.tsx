"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@once-ui-system/core";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
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

  useEffect(() => {
    const checkRouteEnabled = () => {
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
    };

    setIsRouteEnabled(checkRouteEnabled());
    setIsPasswordRequired(
      Boolean(protectedRoutes[normalizedPathname as keyof typeof protectedRoutes]),
    );
    setAuthApiUnavailable(false);
    setError(undefined);
  }, [normalizedPathname]);

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
      setError("Password protection is unavailable in static deployment");
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
      setError("Incorrect password");
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
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
