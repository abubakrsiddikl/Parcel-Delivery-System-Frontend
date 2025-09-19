import CustomPagination from "@/components/CustomPagination";
import LoadingSpinner from "@/components/LoadingSpinner";
import AdminParcelTable from "@/components/module/Table/Admin/AdminParcelTable";
import { useGetAllParcelsQuery } from "@/redux/feature/parcels/parcel.api";
import { useState } from "react";

export default function ManageAllParcelsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const {
    data: parcels,
    isLoading,
    isError,
  } = useGetAllParcelsQuery({
    page: currentPage,
    limit: limit,
  });
  if (isError) {
    return <p>Something Went Wrong !</p>;
  }
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const totalPage = parcels?.meta?.totalPage;
  return (
    <div>
      <AdminParcelTable parcels={parcels?.data || []}></AdminParcelTable>
      <CustomPagination
        totalPage={totalPage as number}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></CustomPagination>
    </div>
  );
}
