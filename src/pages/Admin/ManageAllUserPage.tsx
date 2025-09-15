import LoadingSpinner from "@/components/LoadingSpinner";
import AdminManageAllUserTable from "@/components/module/Table/Admin/AdminAllUserManageTable";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "@/redux/feature/Authentication/auth.api";
import type { TRole } from "@/types";
import { sendErrorMessageToUser } from "@/utils/sendErrorMessageToUser";
import { toast } from "sonner";

export default function ManageAllUserPage() {
  const { data: users, isLoading, isError } = useGetAllUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  if (isError) {
    return <p>Something Went Wrong !.</p>;
  }
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const handleUpdate = async (
    id: string,
    userInfo: { isActive: "ACTIVE" | "BLOCKED"; role: TRole }
  ) => {
    try {
      const res = await updateUser({ id, userInfo }).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("User updated successfully!");
      }
    } catch (err) {
      sendErrorMessageToUser(err);
    }
  };

  return (
    <div>
      {/* user table */}
      <AdminManageAllUserTable
        users={users?.data || []}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
