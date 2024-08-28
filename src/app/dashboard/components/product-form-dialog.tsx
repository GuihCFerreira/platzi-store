"use client";

import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import {
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface DeleteProductDialogProps {
  product: Product | null;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "O título deve conter pelo menos 2 letras.",
  }),
  description: z.string().min(20, {
    message: "A descrição deve conter pelo menos 20 letras.",
  }),
  price: z.number().positive().gte(0, {
    message: "O preço deve ser maior que 0",
  }),
  categoryId: z.number().positive().int({
    message: "Selecione o número da categoria",
  }),
  images: z.string().min(10, {
    message: "Digite pelo menos uma URL de imagem",
  }),
});

const ProductFormDialog = ({ product }: DeleteProductDialogProps) => {
  const handleSendProduct = async () => {
    try {
      toast.success("Produto excluído com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir produto. Tente novamente.");
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: 0,
      price: 0,
      images: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {" "}
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
                      value={product?.title}
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
                      value={product?.description}
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
                      value={product?.price.toFixed(2)}
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
                  <FormLabel>ID Categoria</FormLabel>
                  <FormControl>
                    <Input
                      className="max-w-[75%]"
                      placeholder={product ? product.category.id.toString : "0"}
                      {...field}
                      type="number"
                      value={product?.category.id}
                    />
                  </FormControl>
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
                      value={product?.images[0]}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter className="flex flex-row gap-3">
            <Button variant={"default"} className="w-full" type="submit">
              {product ? "Atualizar o produto" : "Adicionar produto"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
};

export default ProductFormDialog;
