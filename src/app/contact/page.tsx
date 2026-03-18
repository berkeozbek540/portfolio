"use client";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/layout/PageTransition";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setIsError(false);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: data.name, email: data.email, message: data.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setIsSuccess(true);
      form.reset();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="py-4 px-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Contact</h1>
          <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Your message" rows={8} className="min-h-32" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              {isSuccess && (
                <p className="flex items-center mr-4 text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}

              {isError && (
                <p className="flex items-center mr-4 text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
              <Button type="submit" disabled={isLoading} className="bg-zinc-800 text-amber-400">
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </PageTransition>
  );
};

export default page;
