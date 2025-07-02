import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { GITHUB_URL } from "@/consts/urls";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} githubUrl={GITHUB_URL} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
