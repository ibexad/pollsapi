import styled from "@emotion/styled";

export const Header = styled.header`
  background-color: ${props => props.theme.colors.white};
`;

export const Container = styled.div`
  max-width: 1320px;
  padding: 15px;
  margin: 0 auto;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 878px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoText = styled.h3`
  margin: 0;
`;
