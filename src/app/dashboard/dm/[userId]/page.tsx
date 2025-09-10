
'use client';

import { ChatView } from "@/components/chat/chat-view";

const directMessages = [
  { id: 'user1', name: 'Alice Johnson' },
  { id: 'user2', name: 'Bob Williams' },
  { id: 'user3', name: 'Charlie Brown' },
  { id: 'user4', name: 'Diana Miller' },
];

export default function DirectMessagePage({ params }: { params: { userId: string } }) {
  const user = directMessages.find(dm => dm.id === params.userId);
  const userName = user ? user.name : "Unknown User";
  return <ChatView channelName={userName} isDM />;
}
