import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalStyle } from './app/GlobalStyle';
import { AppRouter } from './routes';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
