import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Github, Instagram, Mail, MapPin, Phone } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card className="max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-4">
        <Avatar className="w-40 h-40">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl">Berke Özbek</CardTitle>
        <Badge className="text-center dark:bg-zinc-900 dark:border-zinc-800 text-amber-400">
          Web Developer
        </Badge>
        <Separator className="bg-slate-700 w-full" />
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800">
            <Mail className="w-5 h-5 text-amber-400" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">
              Email
            </span>
            <span className="text-sm font-medium text-black dark:text-white">
              berkeozbek579@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800">
            <Phone className="w-5 h-5 text-amber-400" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">
              Phone
            </span>
            <span className="text-sm font-medium text-black dark:text-white">
              {" "}
              +90 506 385 59 93
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800">
            <MapPin className="w-5 h-5 text-amber-400" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">
              Address
            </span>
            <span className="text-sm font-medium text-black dark:text-white">Aliağa/İZMİR</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div>
          <Github className="w-5 h-5 dark:text-amber-400 text-black inline-block mr-2" />
          <Instagram className="w-5 h-5 dark:text-amber-400 text-black inline-block mr-2" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
