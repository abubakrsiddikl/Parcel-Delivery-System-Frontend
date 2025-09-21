import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetSingleParcelQuery } from "@/redux/feature/parcels/parcel.api";
import { useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  User,
  Mail,
  Phone,
  MapPin,
  Scale,
  DollarSign,
  Type,
  Calendar,
} from "lucide-react"; // Added Calendar icon
import { Badge } from "@/components/ui/badge";
import ParcelStatusUpdateForm from "./ParcelStatusUpdateForm";
import ParcelTimeline from "@/components/module/Parcel/ParcelTimeline";
import type { IParcel } from "@/types";
import { format, parseISO } from "date-fns";

export default function ParcelDetailsPage() {
  const { id } = useParams();
  const {
    data: parcelRes,
    isLoading: parcelLoading,
    isError,
  } = useGetSingleParcelQuery(id as string);

  if (isError)
    return (
      <p className="text-red-500 text-center text-lg font-semibold">
        ❌ Something Went Wrong!
      </p>
    );
  if (parcelLoading) return <LoadingSpinner />;

  const parcel = parcelRes?.data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-8 mt-6">
      {/* Parcel Header */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Package className="h-6 w-6 text-blue-600" />
          Parcel: {parcel?.trackingId}
        </h1>
        {parcel?.createdAt ? (
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            Requested:{" "}
            <span className="ml-1 font-medium">
              {format(parseISO(parcel.createdAt), "MMM d, yyyy h:mm a")}
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-500 mt-2">Requested: N/A</p>
        )}
      </div>

      {/* Parcel Timeline */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Parcel Timeline
        </h2>
        <ParcelTimeline parcel={parcel as IParcel} />
      </div>

      <Separator className="my-6" />

      {/* Parcel Details Card */}
      <Card className="shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-xl py-4">
          <CardTitle className="flex justify-between items-center text-lg font-bold text-gray-800">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              <span>Parcel #{parcel?.trackingId}</span>
            </div>
            <Badge
              variant="secondary"
              className="bg-blue-200 text-blue-800 font-semibold px-3 py-1"
            >
              {parcel?.currentStatus}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-md flex items-center gap-2 text-gray-700">
              <User className="h-4 w-4 text-green-600" />
              Sender
            </h3>
            <p className="text-sm text-gray-600">{parcel?.sender.name}</p>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <Mail className="h-4 w-4 text-gray-500" />
              {parcel?.sender.email}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-md flex items-center gap-2 text-gray-700">
              <User className="h-4 w-4 text-purple-600" />
              Receiver
            </h3>
            <p className="text-sm text-gray-600">{parcel?.receiver.name}</p>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <Mail className="h-4 w-4 text-gray-500" />
              {parcel?.receiver.email}
            </p>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <Phone className="h-4 w-4 text-gray-500" />
              {parcel?.receiver.phone}
            </p>
          </div>
          <div className="space-y-3 md:col-span-2">
            <h3 className="font-semibold text-md flex items-center gap-2 text-gray-700">
              <MapPin className="h-4 w-4 text-red-600" />
              Delivery Details
            </h3>
            <p className="text-sm text-gray-600">{parcel?.deliveryAddress}</p>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <Scale className="h-4 w-4 text-gray-500" />
              Weight: {parcel?.weight}kg
            </p>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <DollarSign className="h-4 w-4 text-gray-500" />
              Delivery Charge: {parcel?.deliveryCharge} ৳
            </p>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <Type className="h-4 w-4 text-gray-500" />
              Parcel Type: {parcel?.type}
            </p>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-6" />

      {/* Status Update Form */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Update Parcel Status
        </h2>
        <ParcelStatusUpdateForm
          parcelId={parcel?._id as string}
          currentStatus={parcel?.currentStatus as string}
        />
      </div>
    </div>
  );
}
