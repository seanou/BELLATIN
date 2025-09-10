
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  BookOpenCheck,
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

const channels = [
  { id: '1', name: 'general', unread: 3 },
  { id: '2', name: 'random' },
  { id: '3', name: 'cs101-study-group' },
  { id: '4', name: 'robotics-club' },
  { id: '5', name: 'events-announcements', unread: 1 },
];

const directMessages = [
  { id: 'user1', name: 'Alice Johnson', avatarId: 'avatar1', online: true },
  { id: 'user2', name: 'Bob Williams', avatarId: 'avatar2' },
  { id: 'user3', name: 'Charlie Brown', avatarId: 'avatar3', online: true },
  { id: 'user4', name: 'Diana Miller', avatarId: 'avatar4' },
];

const notifications = [
  { user: 'Bob Williams', channel: '#cs101-study-group', message: 'Hey, did anyone finish the assignment?' },
  { user: 'Events Bot', channel: '#events-announcements', message: 'Robotics Club meeting today at 6 PM in Room 204.' },
  { user: 'Alice Johnson', channel: 'Direct Message', message: 'Let’s grab coffee tomorrow!' },
];

function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-0 text-xs" variant="destructive">{notifications.length}</Badge>
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <Card className="border-0 shadow-none">
          <CardHeader className="p-2 pt-0">
            <CardTitle className="text-base">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pb-0">
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
    const channelName = pathSegments[pathSegments.length - 1];
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
  const activeId = pathSegments.length > 2 ? pathSegments[pathSegments.length - 1] : 'general';
  
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
              <SidebarGroupLabel>Channels</SidebarGroupLabel>
              {channels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <Link href={`/dashboard/channel/${channel.name}`} passHref legacyBehavior>
                    <SidebarMenuButton asChild tooltip={channel.name} isActive={channel.name === activeId}>
                        <a>
                          <Hash />
                          <span>{channel.name}</span>
                          {channel.unread && (
                            <Badge className="ml-auto">{channel.unread}</Badge>
                          )}
                        </a>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
              {directMessages.map((dm) => {
                const avatar = placeholderImages.find(p => p.id === dm.avatarId);
                return (
                  <SidebarMenuItem key={dm.id}>
                    <Link href={`/dashboard/dm/${dm.id}`} passHref legacyBehavior>
                      <SidebarMenuButton asChild tooltip={dm.name} isActive={dm.id === activeId}>
                        <a>
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
                        </a>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                )
              })}
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
