import * as React from 'react';
import { styled } from 'styledComponents';

const Component = styled.div`
  width: 100%;
  font-size: 0.8em;
  color: var(--normal-color);

  [data-container] {
    height: 60px;
    justify-content: center;
  }
`;

const Footer: React.SFC<any> = () => (
  <Component>
    <div data-container>
      BkHup Co-working space, Floor 3rd, A17 Ta Quang Buu, Bach Khoa, Hanoi 8:00
      - 11:00 Sunday, Oct 14th, 2018
    </div>
  </Component>
);

export default Footer;
