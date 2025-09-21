import { useUpdateParcelStatusMutation } from "@/redux/feature/parcels/parcel.api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useGetUserProfileQuery } from "@/redux/feature/Authentication/auth.api";
import { Role } from "@/constants/role.constants";
import { toast } from "sonner";
import { sendErrorMessageToUser } from "@/utils/sendErrorMessageToUser";
import ButtonLoadingSpinner from "@/components/ButtonLoadingSpinner";

interface IProps {
  parcelId: string;
  currentStatus: string;
}

export default function ParcelStatusUpdateForm({
  parcelId,
  currentStatus,
}: IProps) {
  const [updateStatus, { isLoading }] = useUpdateParcelStatusMutation();
  const { data: user } = useGetUserProfileQuery();
  const role = user?.data.role;
  const form = useForm<{ status: string }>({
    defaultValues: { status: currentStatus },
  });

  // Role  allowed status
  const getAllowedStatuses = () => {
    if (role === Role.ADMIN)
      return [
        "Approved",
        "Dispatched",
        "In Transit",
        "Delivered",
        "Cancelled",
        "Returned",
        "Held",
      ];
    if (role === Role.SENDER) return ["Cancelled"];
    if (role === Role.RECEIVER) return ["Delivered", "Returned"];
    return [];
  };

  const onSubmit = async (data: { status: string }) => {
    console.log(data.status, parcelId);
    try {
      const res = await updateStatus({
        id: parcelId,
        newStatus: data.status,
      }).unwrap();
      if (res.success) {
        toast.success(`Status update to ${data.status} successful `);
      }
    } catch (err) {
      sendErrorMessageToUser(err);
    }
  };

  if (!getAllowedStatuses().length) return null;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm"
      >
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Update Status</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={currentStatus}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAllowedStatuses().map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <ButtonLoadingSpinner></ButtonLoadingSpinner>
            </>
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </Form>
  );
}
