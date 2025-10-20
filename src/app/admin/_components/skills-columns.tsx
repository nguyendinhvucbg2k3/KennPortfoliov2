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
import { Skill } from '@/lib/types';
import { Progress } from '@/components/ui/progress';
import { SkillForm } from './skill-form';
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

export const columns: ColumnDef<Skill>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
        const { language } = useLanguage();
        const adminContent = content[language].admin;
        return (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                {adminContent.shared.name}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
  },
  {
    accessorKey: 'description',
    header: () => {
        const { language } = useLanguage();
        return content[language].admin.shared.description;
    }
  },
  {
    accessorKey: 'level',
    header: () => {
        const { language } = useLanguage();
        return content[language].admin.shared.level;
    },
    cell: ({ row }) => {
        const level = parseFloat(row.getValue('level'))
        return <div className="flex items-center gap-2">
            <Progress value={level} className="h-2 w-24" /> 
            <span>{level}%</span>
        </div>
    }
  },
  {
    id: 'actions',
    header: () => {
        const { language } = useLanguage();
        return content[language].admin.shared.actions;
    },
    cell: ({ row }) => {
      const skill = row.original;
      const { language } = useLanguage();
      const adminContent = content[language].admin;
      const { toast } = useToast();
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

      const handleDelete = () => {
        // Firestore writing is disabled.
        console.log('Delete action triggered. Firestore writing is currently disabled for skill:', skill.id);
        toast({
          title: 'Delete Disabled',
          description: `Skill "${skill.name}" delete action logged to console.`,
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
                  {adminContent.shared.deleteWarning.replace("dữ liệu", "kỹ năng")}
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
              <DialogTitle>{adminContent.skills.edit}</DialogTitle>
            </DialogHeader>
            <SkillForm skill={skill} onSave={() => setIsEditDialogOpen(false)}/>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
