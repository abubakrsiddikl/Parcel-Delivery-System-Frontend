import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { IParcelPayload } from "@/types";
import { useCreateParcelsMutation } from "@/redux/feature/parcels/parcel.api";
import ButtonLoadingSpinner from "@/components/ButtonLoadingSpinner";
import { sendErrorMessageToUser } from "@/utils/sendErrorMessageToUser";
import { toast } from "sonner";

const parcelFormSchema = z.object({
  type: z.string().min(1, "Type is required"),
  weight: z.number().positive("Weight must be positive"),
  deliveryAddress: z.string().min(5, "Address is required"),
  receiverName: z.string().min(2, "Receiver name required"),
  receiverEmail: z.email("Invalid email"),
  receiverPhone: z.string().min(6, "Phone required"),
  receiverAddress: z.string().min(5, "Receiver address required"),
});

type ParcelFormValues = z.infer<typeof parcelFormSchema>;

export default function AddParcelModal() {
  const [open, setOpen] = useState(false);
  const [createParcel, { isLoading }] = useCreateParcelsMutation();
  const form = useForm<ParcelFormValues>({
    resolver: zodResolver(parcelFormSchema),
    defaultValues: {
      type: "",
      weight: 0,
      deliveryAddress: "",
      receiverName: "",
      receiverEmail: "",
      receiverPhone: "",
      receiverAddress: "",
    },
  });

  const onSubmit = async (data: ParcelFormValues) => {
    const payload: IParcelPayload = {
      type: data.type,
      weight: data.weight,
      deliveryAddress: data.deliveryAddress,
      receiver: {
        email: data.receiverEmail,
        name: data.receiverName,
        phone: data.receiverPhone,
        address: data.receiverAddress,
      },
    };
    try {
      const res = await createParcel(payload).unwrap();
      if (res.success) {
        toast.success("Parcel Create Success .");
        setOpen(false);
      }
    } catch (error) {
      sendErrorMessageToUser(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="default">
          + Add New Parcel
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Parcel</DialogTitle>
          <DialogDescription>
            Fill in the parcel details below and click Save.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-h-[80vh] overflow-y-auto p-2"
          >
            {/* Parcel Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parcel Type</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Parcel Type (Document,Box etc .)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Weight  */}

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      placeholder="Enter weight"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value) || 0)
                      }
                      // remove wheel behavior
                      onWheel={(e) => e.currentTarget.blur()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Delivery Address */}
            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter delivery address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Receiver Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="receiverName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Receiver name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="receiverEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Receiver email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="receiverPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Receiver phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="receiverAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Receiver address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <ButtonLoadingSpinner></ButtonLoadingSpinner>
                  </>
                ) : (
                  "Save Parcel"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
