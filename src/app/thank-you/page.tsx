import { NextPage } from "next";
import { Suspense } from "react";

import ThankYou from "./ThankYou";

const Page: NextPage = () => {
  return (
    <Suspense fallback>
      <ThankYou />
    </Suspense>
  );
};

export default Page;
