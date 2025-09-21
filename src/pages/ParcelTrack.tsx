import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ButtonLoadingSpinner from "@/components/ButtonLoadingSpinner";
import ParcelTimeline from "@/components/module/Parcel/ParcelTimeline";
import { useTrackParcelQuery } from "@/redux/feature/parcels/parcel.api";

import { sendErrorMessageToUser } from "@/utils/sendErrorMessageToUser";

export default function ParcelTrack() {
  const [search, setSearch] = useState("");
  const [parcelTrackId, setParcelTrackId] = useState("");

  // only fetch when orderId is set
  const { data, isLoading, error } = useTrackParcelQuery(parcelTrackId, {
    skip: !parcelTrackId,
  });
  if (error) {
    sendErrorMessageToUser(error);
  }

  const handleSearch = () => {
    if (search.trim()) {
      setParcelTrackId(search.trim());
    }
  };

  return (
    <div className="p-4 min-h-screen">
      <p className="text-center my-3">Tracking ID</p>
      <div className="flex justify-center gap-14 items-end">
        <div className="flex flex-col gap-2 mb-4 md:w-[400px]">
          <Input
            type="text"
            placeholder="Search by Tracking ID (TRK-20250909-0001)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch}>
            {isLoading ? (
              <>
                <ButtonLoadingSpinner></ButtonLoadingSpinner>
              </>
            ) : (
              "Parcel Track"
            )}
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        {isLoading && <p>Loading...</p>}

        {data && <ParcelTimeline parcel={data.data}></ParcelTimeline>}
      </div>
    </div>
  );
}
