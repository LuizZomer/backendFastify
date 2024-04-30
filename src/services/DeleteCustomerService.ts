import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Id necessario");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });

    if (!findCustomer) {
      throw new Error("Nenhum cliente encontrado");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Deletado com sucesso" };
  }
}

export { DeleteCustomerService };
