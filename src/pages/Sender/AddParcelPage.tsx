import LoadingSpinner from "@/components/LoadingSpinner";
import AddParcelModal from "@/components/module/Modal/AddParcelModal";
import SenderParcelTable from "@/components/module/Table/Sender/SenderParcelTable";
import { useGetMyParcelQuery } from "@/redux/feature/parcels/parcel.api";

export default function AddParcelPage() {
  const { data: parcels, isLoading, isError } = useGetMyParcelQuery();
  if (isError) return <p>Something Went Wrong !</p>;
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <div className="flex justify-end mb-5">
        <AddParcelModal></AddParcelModal>
      </div>
      <div>
        <SenderParcelTable parcels={parcels?.data || []}></SenderParcelTable>
      </div>
    </div>
  );
}
