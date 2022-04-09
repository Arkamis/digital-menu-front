import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'routes';
import { useRecoilValue } from 'recoil';
import LoadingScreen from './components/LoadingScreen';
import appState from './recoil/AppState';

function App() {
  const queryClient = new QueryClient();
  const { isLoading } = useRecoilValue(appState);
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {isLoading ? <LoadingScreen /> : <Router />}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
