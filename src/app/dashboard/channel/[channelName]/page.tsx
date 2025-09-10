
'use client';

import { ChatView } from "@/components/chat/chat-view";

export default function ChannelPage({ params }: { params: { channelName: string } }) {
  return <ChatView channelName={params.channelName} />;
}
