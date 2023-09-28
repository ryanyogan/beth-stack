export function redirect(
  {
    set,
    headers,
  }: {
    headers: Record<string, string | null>;
    set: {
      headers: Record<string, string> & {
        "Set-Cookie"?: string | string[];
      };
      status?: number | string;
      redirect?: string;
    };
  },
  href: string,
) {
  if (headers["hx-request"] === "true") {
    set.headers["HX-Location"];
  } else {
    set.redirect = href;
  }
}
