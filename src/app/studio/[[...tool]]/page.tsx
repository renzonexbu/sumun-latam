import { NextStudio } from "next-sanity/studio";

import { projectId } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
  if (!projectId) {
    return (
      <main className="mx-auto flex min-h-full max-w-lg flex-col justify-center gap-3 px-6">
        <h1 className="text-2xl font-semibold">Conectá el proyecto de Sanity</h1>
        <p>
          Completá <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> en{" "}
          <code>.env.local</code> y reiniciá el servidor. El sitio en{" "}
          <code>/</code> ya está listo para maquetar.
        </p>
      </main>
    );
  }

  const { default: config } = await import("../../../../sanity.config");

  return <NextStudio config={config} />;
}
