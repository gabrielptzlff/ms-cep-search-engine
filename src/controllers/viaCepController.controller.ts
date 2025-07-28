import { getAddressByCep } from '../services/viaCepService.service';

export async function handleCepRequest(cep: string, res: any) {
  console.log(`CEP recebido: ${cep}`);
  try {
    const address = await getAddressByCep(cep);
    if (!address) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'CEP não encontrado' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(address));
  } catch (error) {
    console.error('Erro ao buscar endereço:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Erro ao buscar endereço' }));
  }
}
