import { DetailsPage } from "@/components/website/PageSections/HomePage/why-choose-us/details-page";

type DetailsProps = {
  params: Promise<{ id: string }>;
};

const Details = async ({ params }: DetailsProps) => {
  const { id } = await params;
  console.log("Received id:", id);

  return (
    <div>
      <DetailsPage cardId={id} />
    </div>
  );
};

export default Details;