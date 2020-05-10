import React, { useState } from "react";

import { MainFooter } from "./style";

export default function Footer(props) {
  const [year] = useState(new Date().getFullYear());

  return <MainFooter>© {year} Products. All Rights Reserved.</MainFooter>;
}
