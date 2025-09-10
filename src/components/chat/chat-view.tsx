
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { placeholderImages } from "@/lib/placeholder-images";
import { Paperclip, SendHorizonal, Lock, Unlock } from "lucide-react";
import { useState, useEffect } from "react";

const messages: any[] = [];

export function ChatView({ channelName, isDM }: { channelName?: string; isDM?: boolean }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isAnnoncesLocked, setIsAnnoncesLocked] = useState(channelName === "Annonces");

  useEffect(() => {
    setIsAnnoncesLocked(channelName === "Annonces");
    setInputValue("");
  }, [channelName]);
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (channelName === "Annonces" && isAnnoncesLocked) {
      if (inputValue === "0511") {
        setIsAnnoncesLocked(false);
        setInputValue("");
      } else {
        // Maybe show an error toast here in the future
        setInputValue("");
      }
      return;
    }

    const newMessage = {
        id: messages.length + 1,
        user: "John Doe",
        avatarId: 'my-avatar',
        text: inputValue,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isCurrentUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const isInputDisabled = channelName === "Annonces" && isAnnoncesLocked;
  const inputPlaceholder = isInputDisabled
    ? "Enter authorization code..."
    : "Type a message...";


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
        <form className="relative" onSubmit={handleSubmit}>
          <Input 
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="pr-24 h-11" 
          />
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
                {isInputDisabled ? (
                    <Lock className="w-5 h-5 text-muted-foreground" />
                ) : (
                    <SendHorizonal className="w-5 h-5 text-muted-foreground" />
                )}
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
