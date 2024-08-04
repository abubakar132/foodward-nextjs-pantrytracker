import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import 'tailwindcss/tailwind.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6985C0',
    },
    secondary: {
      main: '#AAB9FC',
    },
  },
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
