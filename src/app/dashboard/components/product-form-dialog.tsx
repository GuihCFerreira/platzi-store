"use client";

import { createProduct, CreateProductProps } from "@/_actions/create-product";
import { Category } from "@/_model/category";
import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface ProductFormDialogProps {
  product: Product | null;
  categories: Category[];
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "O título deve conter pelo menos 2 letras.",
  }),
  description: z.string().min(20, {
    message: "A descrição deve conter pelo menos 20 letras.",
  }),
  price: z.string().min(1, {
    message: "O preço deve ser maior que 0",
  }),
  categoryId: z.string().min(1, {
    message: "Selecione uma categoria",
  }),
  images: z.string().min(10, {
    message: "Digite pelo menos uma URL de imagem",
  }),
});

const ProductFormDialog = ({ product, categories }: ProductFormDialogProps) => {
  const handleSendProduct = async (product: CreateProductProps) => {
    try {
      await createProduct(product);
      toast.success("Produto criado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao inserir produto. Tente novamente.");
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: product ? product?.title : "",
      description: product ? product?.description : "",
      price: product ? product?.price.toString() : "0",
      categoryId: product ? product?.category.id.toString() : "0",
      images: product ? product?.images[0] : "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const newProduct: CreateProductProps = {
      product: {
        title: values.title,
        description: values.description,
        price: Number(values.price),
        categoryId: Number(values.categoryId),
        images: [values.images],
      },
    };

    handleSendProduct(newProduct);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {product ? "Atualizar dados do" : "Adicionar novo"} produto
        </DialogTitle>
        <DialogDescription>
          Insira os dados para {product ? "atualizar" : "adicionar um novo"}{" "}
          produto
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3 justify-between">
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-[75%]"
                      placeholder={product ? product.title : "Título"}
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3 justify-between">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-[75%]"
                      placeholder={product ? product.description : "Descrição"}
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3 justify-between">
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-[75%]"
                      placeholder={product ? product.price.toFixed(2) : "Preço"}
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3 justify-between">
                  <FormLabel>Categoria</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      {/* <Input
                      className="max-w-[75%]"
                      placeholder={product ? product.category.id.toString : "0"}
                      {...field}
                      type="number"
                      value={product?.category.id}
                    /> */}
                      <SelectTrigger className="max-w-[75%]">
                        <SelectValue
                          placeholder={
                            product
                              ? product.category.name
                              : "Selecione uma categoria"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          value={category.id.toString()}
                          key={category.id}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3 justify-between">
                  <FormLabel>Url imagem</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-[75%]"
                      placeholder={product ? product.images[0] : "Imagens"}
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter className="flex flex-row gap-3">
            <DialogClose asChild>
              <Button variant={"default"} className="w-full" type="submit">
                {product ? "Atualizar o produto" : "Adicionar produto"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
};

export default ProductFormDialog;
