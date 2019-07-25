async function controllerMovementFind(id) {
  debug('Entrou no item');
  return transaction(async () => {
    const result = await Account.findByPk(id);

    if (!result) {
      throw new MethodNotFoundError('Registro não encontrado!');
    }

    return result;
  });
}

module.exports = {
  controllerMovementFind
};
