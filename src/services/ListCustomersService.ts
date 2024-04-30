import prismaClient from "../prisma";

class ListCustomersService {
  async execution() {
    const customers = await prismaClient.customer.findMany();

    return customers;
  }
}

export { ListCustomersService };
