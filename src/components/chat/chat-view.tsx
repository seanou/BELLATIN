
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { placeholderImages } from "@/lib/placeholder-images";
import { Paperclip, SendHorizonal } from "lucide-react";

const messages = [
    {
      id: 1,
      user: "Alice Johnson",
      avatarId: "avatar1",
      text: "Has anyone started on the philosophy paper? I'm a bit stuck on the topic.",
      time: "10:30 AM",
      isCurrentUser: false,
    },
    {
      id: 2,
      user: "John Doe",
      avatarId: "my-avatar",
      text: "I have! I'm writing about existentialism in modern cinema. It's pretty interesting.",
      time: "10:32 AM",
      isCurrentUser: true,
    },
    {
      id: 3,
      user: "Alice Johnson",
      avatarId: "avatar1",
      text: "That sounds cool! Any good movie recommendations to get started?",
      time: "10:33 AM",
      isCurrentUser: false,
    },
    {
      id: 4,
      user: "Charlie Brown",
      avatarId: "avatar3",
      text: "I found this great resource online, it might help. I'll share the link in the #resources channel.",
      time: "10:35 AM",
      isCurrentUser: false,
    },
     {
      id: 5,
      user: "John Doe",
      avatarId: "my-avatar",
      text: "For sure! 'Blade Runner 2049' is a good one. It explores what it means to be human. Perfect for existential themes.",
      time: "10:36 AM",
      isCurrentUser: true,
    },
];

export function ChatView({ channelName, isDM }: { channelName?: string; isDM?: boolean }) {
  // In a real app, you would fetch messages for the given channelName
  // For now, we'll just display a welcome message.

  const welcomeMessage = channelName 
    ? `This is the beginning of your conversation with ${isDM ? '' : '#'}${channelName}.`
    : "Select a channel to start chatting.";
  
  const allMessages = [
    {
      id: 0,
      user: "System",
      avatarId: "",
      text: welcomeMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: false,
      isSystem: true,
    },
    ...messages
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.14))]">
      <div className="flex-1 overflow-y-auto p-4 space-y-6 sm:p-6">
        {allMessages.map((message) => {
            if (message.isSystem) {
                return (
                    <div key={message.id} className="text-center text-sm text-muted-foreground my-4">
                        <p>{message.text}</p>
                    </div>
                )
            }
            const avatar = placeholderImages.find(p => p.id === message.avatarId);
            return (
              <div key={message.id} className={`flex items-end gap-3 ${message.isCurrentUser ? 'justify-end' : ''}`}>
                {!message.isCurrentUser && (
                  <Avatar className="h-9 w-9">
                    {avatar && <AvatarImage src={avatar.imageUrl} alt={message.user} />}
                    <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-lg p-3 max-w-xs lg:max-w-md shadow-sm ${message.isCurrentUser ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card border rounded-bl-none'}`}>
                  {!message.isCurrentUser && <p className="font-semibold text-sm mb-1 text-primary">{message.user}</p>}
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-2 text-right ${message.isCurrentUser ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{message.time}</p>
                </div>
                {message.isCurrentUser && (
                  <Avatar className="h-9 w-9">
                    {avatar && <AvatarImage src={avatar.imageUrl} alt={message.user} />}
                    <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
              </div>
            )
        })}
      </div>
      <div className="p-4 border-t bg-background">
        <form className="relative">
          <Input placeholder="Type a message..." className="pr-24 h-11" />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <Label htmlFor="file-upload" className="cursor-pointer">
              <Button type="button" variant="ghost" size="icon" asChild>
                <div>
                  <Paperclip className="w-5 h-5 text-muted-foreground" />
                  <span className="sr-only">Attach file</span>
                </div>
              </Button>
            </Label>
            <Input id="file-upload" type="file" className="hidden" />
            <Button type="submit" variant="ghost" size="icon">
              <SendHorizonal className="w-5 h-5 text-muted-foreground" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
