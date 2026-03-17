import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const OpenToWork = () => {
  return (
    <>
      <div>
        <div className="border border-zinc-800 border-t-2 border-t-green-400 rounded-lg p-4 bg-zinc-900">
          <Badge
            className="border-green-400 rounded-full"
            variant="secondary"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, rgba(74,222,128,0.3) 0%, #18181b 100%)",
            }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <span className="text-md text-green-500">Open To Work</span>
          </Badge>
          <p className="text-gray-400 py-2">
            I am available for freelance projects and full-time positions.
          </p>
          <Button className="text-amber-400" variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default OpenToWork;
