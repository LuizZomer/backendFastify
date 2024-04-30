import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomersService();

    const customers = await listCustomerService.execution();

    reply.send(customers);
  }
}

export { ListCustomersController };
