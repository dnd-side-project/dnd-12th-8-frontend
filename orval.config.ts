module.exports = {
  '98percent': {
    output: {
      workspace: 'src/generated',
      mode: 'tags',
      client: 'react-query',
      target: './api',
      schemas: './models',
      clean: true,
      mock: true,
      prettier: true,
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useSuspenseQuery: true,
          useSuspenseInfiniteQuery: true,
        },
      },
    },
    input:
      'http://ec2-3-36-160-44.ap-northeast-2.compute.amazonaws.com:8080/v3/api-docs/springdoc-openapi',
  },
};
