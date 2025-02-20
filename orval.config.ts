import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      workspace: 'src/generated',
      mode: 'tags-split', // 태그별로 파일 분리
      target: './api',
      schemas: './models',
      client: 'react-query',
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: './custom-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useSuspenseQuery: true,
          useSuspenseInfiniteQuery: true,
        },
      },
    },
    input: {
      target: `http://3.37.76.228:8080/api-docs`,
    },
  },
});
