import { QueryClient } from '@tanstack/react-query';

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // prevents automatic refetching when the user returns to the browser tab
      // https://tanstack.com/query/latest/docs/react/guides/window-focus-refetching
      refetchOnWindowFocus: false,

      // automatically refetch data when network connection is restored
      // https://tanstack.com/query/latest/docs/react/reference/useQuery
      refetchOnReconnect: true,

      // time until cached data is garbage collected (30 minutes)
      // https://tanstack.com/query/latest/docs/react/guides/caching
      gcTime: 30 * 60 * 1000,

      // time until data is considered stale and eligible for refetch (10 minutes)
      // https://tanstack.com/query/latest/docs/react/guides/important-defaults
      staleTime: 10 * 60 * 1000,

      // always try to make requests regardless of online/offline status
      // https://tanstack.com/query/latest/docs/react/guides/network-mode
      networkMode: 'always',

      // smart retry logic: skip client errors (4xx), retry server/network errors up to 2 times
      // https://tanstack.com/query/latest/docs/react/guides/query-retries
      retry: (failureCount, error) => {
        // check if the error is a fetch error with status
        if (error && 'status' in error && typeof (error as { status: unknown }).status === 'number') {
          const status = (error as { status: number }).status;
          if (status >= 400 && status < 500) {
            return false;
          }
        }
        return failureCount < 2;
      },

      // exponential backoff delay between retries: 1s, 2s, 3s (capped at 3s)
      // https://tanstack.com/query/latest/docs/react/guides/query-retries#retry-delay
      retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 3000), // exponential backoff: 1s, 2s, 3s
    },
    mutations: {
      // always try to make mutation requests regardless of online/offline status
      // https://tanstack.com/query/latest/docs/react/guides/network-mode
      networkMode: 'always',

      // never retry mutations to prevent duplicate submissions
      // https://tanstack.com/query/latest/docs/react/guides/mutations#retry
      retry: false,
    },
  },
});
