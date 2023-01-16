import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export default function App() {
  return (
    <StyledApp>
      <NxWelcome title="not-working" />
    </StyledApp>
  );
}
