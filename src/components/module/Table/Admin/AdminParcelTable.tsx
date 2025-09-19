import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IParcel } from "@/types/parcels.type";

import { format } from "date-fns";
import { Link } from "react-router";

interface Props {
  parcels: IParcel[];

  onEdit?: (id: string) => void;
  onDelete?: (id: string, name: string) => void;
}

export default function AdminParcelTable({ parcels }: Props) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-2 border">Created At</TableHead>
            <TableHead className="p-2 border">Tracking ID</TableHead>
            <TableHead className="p-2 border">Sender Name</TableHead>
            <TableHead className="p-2 border">Receiver Name</TableHead>
            <TableHead className="p-2 border">Status</TableHead>

            <TableHead className="p-2 border">More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcels.map((parcel) => (
            <TableRow key={parcel._id}>
              {/* date */}
              <TableCell className="p-2 border">
                {parcel?.statusLogs?.[0]?.timestamp
                  ? format(
                      new Date(parcel.statusLogs[0].timestamp),
                      "MMM dd, yyyy"
                    )
                  : "N/A"}
              </TableCell>
              {/* tracking */}
              <TableCell className="p-2 border">{parcel.trackingId}</TableCell>
              {/* sender */}
              <TableCell className="p-2 border">{parcel.sender.name}</TableCell>
              {/* receiver */}
              <TableCell className="p-2 border">
                {parcel.receiver.name}
              </TableCell>
              {/* status */}
              <TableCell className="p-2 border">
                {parcel.currentStatus}
              </TableCell>

              <TableCell className="p-2 border">
                <Link
                  to={`/parcel-details/${parcel.trackingId}`}
                  className="border hover:rounded border-blue-300 p-1 hover:bg-blue-300"
                >
                  ...
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
