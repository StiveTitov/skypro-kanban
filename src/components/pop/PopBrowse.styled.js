import styled from "styled-components";
import { themeStyles } from "../../lib/theme";

export const CategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
  display: block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};

  ${CategoriesThemeP} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  }
`;
