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
      target:
        'http://ec2-3-36-160-44.ap-northeast-2.compute.amazonaws.com:8080/v3/api-docs/springdoc-openapi',
    },
  },
});
