"use client";

import { getProductByTitle } from "@/_data/get-products";
import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().trim().min(3, {
    message: "Digite algo para buscar",
  }),
});

interface SearchProps {
  offset: number;
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

const Search = ({ offset, setProducts }: SearchProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const getProducts = async (title: string) => {
      const listProducts = await getProductByTitle(title, offset);
      setProducts(listProducts);
    };
    getProducts(data.title);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Faça sua busca"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  );
};

export default Search;
