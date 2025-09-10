import Image from 'next/image';
import { LoginForm } from '@/components/auth/login-form';
import { BookOpenCheck } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const loginImage = placeholderImages.find((img) => img.id === 'login-bg');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline flex items-center justify-center gap-2">
              <BookOpenCheck className="h-8 w-8 text-primary" />
              College Connect
            </h1>
            <p className="text-balance text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {loginImage && (
          <Image
            src={loginImage.imageUrl}
            alt={loginImage.description}
            data-ai-hint={loginImage.imageHint}
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.3]"
          />
        )}
      </div>
    </div>
  );
}
