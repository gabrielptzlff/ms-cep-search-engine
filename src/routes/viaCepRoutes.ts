import { handleCepRequest } from '../controllers/viaCepController.controller';
import { IncomingMessage, ServerResponse } from 'http';

export async function route(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url!, `http://${req.headers.host}`);

  if (req.method === 'GET' && req.url?.startsWith('/viacep')) {
    let cep = url.searchParams.get('cep');

    if (!cep) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'CEP parameter is required' }));

      return;
    }

    cep = cep.substring(0, 5) + '-' + cep.substring(5, 8); // Format CEP to 'XXXXX-XXX'
    await handleCepRequest(cep, res);

    return true;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
}
