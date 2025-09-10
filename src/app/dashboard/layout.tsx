
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  BookOpenCheck,
  ChevronDown,
  Hash,
  MessageCircle,
  Search,
  Settings,
  User,
  Users,
} from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

const channels = [
  { id: '1', name: '3A' },
  { id: '2', name: 'Latinistes' },
  { id: '3', name: 'LCE' },
  { id: '4', name: 'Espagnol LV1' },
];

const directMessages: any[] = [];

const notifications: any[] = [];

function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-0 text-xs" variant="destructive">{notifications.length}</Badge>
          )}
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <Card className="border-0 shadow-none">
          <CardHeader className="p-2 pt-0">
            <CardTitle className="text-base">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pb-0">
            {notifications.length > 0 ? (
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">{notification.user}</span> in <span className="text-primary">{notification.channel}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center">You're all caught up!</p>
            )}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

function BreadcrumbCurrentPage() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.includes('profile')) {
    return <BreadcrumbPage>Profile</BreadcrumbPage>;
  }

  if (pathSegments.includes('channel')) {
    const channelName = decodeURIComponent(pathSegments[pathSegments.length - 1]);
    return <BreadcrumbPage>#{channelName}</BreadcrumbPage>;
  }

  if (pathSegments.includes('dm')) {
    const dmId = pathSegments[pathSegments.length - 1];
    const dmUser = directMessages.find(dm => dm.id === dmId);
    return <BreadcrumbPage>{dmUser ? dmUser.name : 'Direct Message'}</BreadcrumbPage>;
  }

  return <BreadcrumbPage>Dashboard</BreadcrumbPage>;
}


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const myAvatar = placeholderImages.find((img) => img.id === 'my-avatar');
  const pathname = usePathname();
  
  const pathSegments = pathname.split('/').filter(Boolean);
  const activeId = pathSegments.length > 2 ? decodeURIComponent(pathSegments[pathSegments.length - 1]) : 'Annonces';
  
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <BookOpenCheck className="size-7 text-primary" />
            <span className="text-lg font-semibold font-headline">College Connect</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarGroup>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Annonces" isActive={"Annonces" === activeId} className="font-semibold">
                        <Link href={`/dashboard/channel/Annonces`}>
                            <Hash />
                            <span>Annonces</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen>
                    <CollapsibleTrigger className="w-full">
                        <SidebarGroupLabel className="w-full justify-between">
                            Channels
                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                        </SidebarGroupLabel>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {channels.map((channel) => (
                            <SidebarMenuItem key={channel.id}>
                                <SidebarMenuButton asChild tooltip={channel.name} isActive={channel.name === activeId}>
                                    <Link href={`/dashboard/channel/${channel.name}`}>
                                        <Hash />
                                        <span>{channel.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            </SidebarGroup>
            <SidebarGroup>
                <Collapsible defaultOpen>
                    <CollapsibleTrigger className="w-full">
                        <SidebarGroupLabel className="w-full justify-between">
                            Direct Messages
                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                        </SidebarGroupLabel>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {directMessages.map((dm) => {
                            const avatar = placeholderImages.find(p => p.id === dm.avatarId);
                            return (
                                <SidebarMenuItem key={dm.id}>
                                    <SidebarMenuButton asChild tooltip={dm.name} isActive={dm.id === activeId}>
                                        <Link href={`/dashboard/dm/${dm.id}`}>
                                            <div className="relative">
                                                <Avatar className="h-6 w-6">
                                                {avatar && <AvatarImage src={avatar.imageUrl} alt={dm.name} />}
                                                <AvatarFallback>{dm.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                {dm.online && (
                                                <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-sidebar" />
                                                )}
                                            </div>
                                            <span>{dm.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </CollapsibleContent>
                </Collapsible>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto w-full justify-start gap-3 px-2">
                <Avatar className="h-9 w-9">
                  {myAvatar && <AvatarImage src={myAvatar.imageUrl} alt="My Avatar" />}
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-left group-data-[collapsible=icon]:hidden">
                  <p className="font-medium text-sm">John Doe</p>
                  <p className="text-xs text-sidebar-foreground/70">john.doe@university.edu</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mb-2" side="top" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <SidebarTrigger className="sm:hidden" />
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                 <BreadcrumbCurrentPage />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[320px] focus:bg-background"
            />
          </div>
          <NotificationsPopover />
        </header>
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
