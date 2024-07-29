

import { Categories, OfferList } from "@/components/ui";
import { Form } from "@/components/shared";


export default function Home() {
  return (
    <div className="container">
      <OfferList />
      <Categories />
      <Form />
    </div>
  );
}
