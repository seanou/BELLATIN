import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { placeholderImages } from "@/lib/placeholder-images";

export default function ProfilePage() {
  const myAvatar = placeholderImages.find((img) => img.id === 'my-avatar');
  return (
    <div className="p-4 sm:p-6">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle>Profile Customization</CardTitle>
          <CardDescription>
            This is how others will see you on College Connect.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Avatar</Label>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  {myAvatar && <AvatarImage src={myAvatar.imageUrl} alt="My Avatar" />}
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button type="button" variant="outline">Change Avatar</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@university.edu" disabled />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio & Interests</Label>
              <Textarea
                id="bio"
                placeholder="Tell us a little bit about yourself"
                defaultValue="Computer Science major. I love hiking, building robots, and discussing existentialism in modern cinema."
                className="min-h-24"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
            <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
