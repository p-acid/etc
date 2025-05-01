import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          id="folder-alt"
          className="icon glyph"
        >
          <path d="M19,8H7A3,3,0,0,0,4.26,9.78L2,14.87V5A2,2,0,0,1,4,3H8a2.05,2.05,0,0,1,1.4.56L11.83,6H17A2,2,0,0,1,19,8Zm2.81,2.42A1,1,0,0,0,21,10H7a1,1,0,0,0-.91.59l-4,9A1,1,0,0,0,3,21H18a1,1,0,0,0,.95-.68l3-9A1,1,0,0,0,21.81,10.42Z" />
        </svg>
        ect.
      </>
    ),
  },
  links: [
    {
      text: "문서",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
