import { deleteProduct } from "@/_actions/delete-product";
import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface DeleteProductDialogProps {
  product: Pick<Product, "id" | "title">;
}

const DeleteProductDialog = ({ product }: DeleteProductDialogProps) => {
  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(product.id);
      toast.success("Produto excluído com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir produto. Tente novamente.");
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle> Você quer excluir o produto?</DialogTitle>
        <DialogDescription>
          Tem certeza que deseja realizar a exclusão do produto {product.title}?
          Essa ação é irreversível.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex flex-row gap-3">
        <DialogClose asChild>
          <Button variant={"secondary"} className="w-full">
            Voltar
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            variant={"destructive"}
            className="w-full"
            onClick={handleDeleteProduct}
          >
            Confirmar
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default DeleteProductDialog;
