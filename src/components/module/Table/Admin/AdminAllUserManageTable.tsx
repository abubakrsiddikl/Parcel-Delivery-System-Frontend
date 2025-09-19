import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useState } from "react";

import type { IUser, TRole, IsActive } from "@/types";
import {
  userStatusSchema,
  type TUserStatus,
} from "@/ZodSchema/updateUserRoleAndStatus";
import { sendErrorMessageToUser } from "@/utils/sendErrorMessageToUser";
import { Button } from "@/components/ui/button";

interface Props {
  users: IUser[];
  onUpdate?: (id: string, data: TUserStatus) => void;
}

export default function AdminManageAllUserTable({ users, onUpdate }: Props) {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [newStatus, setNewStatus] = useState<IsActive | undefined>();
  const [newRole, setNewRole] = useState<TRole | undefined>();

  const handleConfirmUpdate = () => {
    if (!selectedUser) return;
    
    try {
      // Validate with Zod
      const parsed = userStatusSchema.parse({
        isActive: newStatus,
        role: newRole,
      });
      console.log(newStatus, newRole);

      onUpdate?.(selectedUser._id, parsed);
      setSelectedUser(null);
    } catch (err) {
      sendErrorMessageToUser(err);
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-2 border">Name</TableHead>
            <TableHead className="p-2 border">Email</TableHead>
            <TableHead className="p-2 border">Role</TableHead>
            <TableHead className="p-2 border">Block/Unblock</TableHead>
            <TableHead className="p-2 border">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="p-2 border">{user.name}</TableCell>
              <TableCell className="p-2 border">{user.email}</TableCell>

              <TableCell className="p-2 border">
                <Select
                  value={selectedUser?._id === user._id ? newRole : user.role}
                  onValueChange={(val) => {
                    setSelectedUser(user);
                    setNewRole(val as TRole);
                  }}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="sender">Sender</SelectItem>
                    <SelectItem value="receiver">Receiver</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell className="p-2 border">
                <Select
                  value={
                    selectedUser?._id === user._id ? newStatus : user.isActive
                  }
                  onValueChange={(val) => {
                    setSelectedUser(user);
                    setNewStatus(val as IsActive);
                  }}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="BLOCKED">Blocked</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell className="p-2 border">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="default">
                      Update
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Update</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to update this user?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleConfirmUpdate}>
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
