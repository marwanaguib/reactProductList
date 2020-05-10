import React, { useState } from "react";

import { MainFooter } from "./style";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return <MainFooter>© {year} Products. All Rights Reserved.</MainFooter>;
};

export default Footer;
