'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Experience } from '@/lib/types';
import { ExperienceForm } from './experience-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
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
} from '@/components/ui/alert-dialog';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import { deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';


export const columns: ColumnDef<Experience>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
        const { language } = useLanguage();
        const adminContent = content[language].admin;
        return (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                {adminContent.shared.title}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
  },
  {
    accessorKey: 'organization',
    header: () => {
        const { language } = useLanguage();
        return content[language].admin.shared.organization;
    }
  },
  {
    accessorKey: 'date',
    header: () => {
        const { language } = useLanguage();
        return content[language].admin.shared.date;
    }
  },
  {
    id: 'actions',
    header: () => {
        const { language } = useLanguage();
        return content[language].admin.shared.actions;
    },
    cell: ({ row }) => {
      const experience = row.original;
      const { language } = useLanguage();
      const adminContent = content[language].admin;
      const { toast } = useToast();
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
      const firestore = useFirestore();

      const handleDelete = () => {
        const docRef = doc(firestore, 'experience', experience.id);
        deleteDocumentNonBlocking(docRef);
        toast({
          title: 'Experience Deleted',
          description: `Experience "${experience.title}" has been deleted.`,
        });
      };

      return (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <AlertDialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{adminContent.shared.actions}</DropdownMenuLabel>
                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    {adminContent.shared.edit}
                  </DropdownMenuItem>
                </DialogTrigger>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className="text-destructive">{adminContent.shared.delete}</DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{adminContent.shared.areYouSure}</AlertDialogTitle>
                <AlertDialogDescription>
                  {adminContent.shared.deleteWarning.replace("dữ liệu", "kinh nghiệm")}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{adminContent.shared.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>{adminContent.shared.continue}</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{adminContent.experience.edit}</DialogTitle>
            </DialogHeader>
            <ExperienceForm experience={experience} onSave={() => setIsEditDialogOpen(false)}/>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
