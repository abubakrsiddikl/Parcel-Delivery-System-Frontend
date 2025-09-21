import LoadingSpinner from "@/components/LoadingSpinner";
import ReceiverParcelTable from "@/components/module/Table/Receiver/ReceiverParcelTable";
import { useGetMyParcelQuery } from "@/redux/feature/parcels/parcel.api";

export default function ViewIncomingParcels() {
  const { data: parcels, isLoading, isError } = useGetMyParcelQuery();
  if (isError) return <p>Something Went Wrong !</p>;
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <ReceiverParcelTable parcels={parcels?.data || []}></ReceiverParcelTable>
    </div>
  );
}
