import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionDelete = await transactionsRepository.delete(id);

    if (!transactionDelete) {
      throw new AppError('Error delete transaction', 401);
    }
  }
}

export default DeleteTransactionService;
