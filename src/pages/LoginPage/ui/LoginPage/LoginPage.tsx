import { Container } from '@mui/material';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { LoginForm } from '@/features/LoginUser';

function LoginPage() {
  return (
    <Page>
      <Container maxWidth="xs">
        <LoginForm />
      </Container>
    </Page>
  );
}

export default memo(LoginPage);
