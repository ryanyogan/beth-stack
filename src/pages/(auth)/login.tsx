import Elysia from "elysia";
import { BaseHtml } from "../../components/base";
import { ctx } from "../../context";

export const login = new Elysia().use(ctx).get("/login", async (ctx) => {
  const authRequest = ctx.auth.handleRequest(ctx);
  const session = await authRequest.validate();
  if (session) {
    ctx.set.redirect = "/";
    return;
  }

  return ctx.html(() => (
    <BaseHtml>
      <div
        class="flex h-screen w-full flex-col items-center justify-center bg-gray-200"
        hx-ext="response-targets"
      >
        <div class="p-4">
          <a
            href="/"
            class="text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            Go Home
          </a>
        </div>
        <a
          hx-boost="false"
          href="/api/auth/login/google"
          class="display-block rounded-lg bg-gray-800 p-2 text-center text-white"
        >
          Sign In with Google
          <div class="i-logos-google-icon inline-block text-2xl" />
        </a>
      </div>
    </BaseHtml>
  ));
});
